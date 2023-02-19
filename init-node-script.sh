#!/bin/bash

# To build docker images:
# ```sh
# docker build --progress=plain -t "honeywood-blockchain:latest" ./ --file Dockerfile
# docker tag honeywood-blockchain:latest monetatoday/honeywood-blockchain:TAG
# docker push monetatoday/honeywood-blockchain:TAG
# ```

if [[ -z "${DAEMON_HOME}" ]];
then
  echo "You have to set DAEMON_HOME variable before"
  exit 1
fi

export NODE_NAME=$1

MODE="${2:-FULL_MODE}"

# # Genesis init config
# starport chain init
docker run -v "$DAEMON_HOME/../:/home/tendermint/" monetatoday/honeywood-blockchain:genesis ignite chain init
# docker run -v "$DAEMON_HOME/../:/home/tendermint/" monetatoday/honeywood-blockchain:genesis ./honeyd init $NODE_NAME
cp ./genesis/mainnet.json $DAEMON_HOME/config/genesis.json
sed -i -e "/moniker =/ s/= .*/= \"$NODE_NAME\"/" $DAEMON_HOME/config/config.toml
sed -i -e 's/timeout_commit = "5s"/timeout_commit = "4s"/' $DAEMON_HOME/config/config.toml
sed -i -e 's/seeds = ""/seeds = "abc0ceacf8d74c6d095e8b9d555ea87e40137f57@139.162.241.189:26656"/' $DAEMON_HOME/config/config.toml

if [ $MODE = "FAST_SYNC" ]
then
  RESPONSE=$(curl -s http://139.162.235.179:26657/commit)
  HEIGHT=$( jq -r  '.result.signed_header.header.height' <<< ${RESPONSE} ) 
  HASH=$( jq -r  '.result.signed_header.commit.block_id.hash' <<< ${RESPONSE} ) 

  echo "Trusted height: ${HEIGHT}"
  echo "Trusted hash: ${HASH}"

  sed -i -e 's/enable = false/enable = true/' $DAEMON_HOME/config/config.toml
  sed -i -e 's/trust_height = 0/trust_height = '"${HEIGHT}"'/' $DAEMON_HOME/config/config.toml
  sed -i -e 's/trust_hash = ""/trust_hash = "'"${HASH}"'"/' $DAEMON_HOME/config/config.toml
  sed -i -e 's/rpc_servers = ""/rpc_servers = "http:\/\/139.162.235.179:26657,http:\/\/139.162.192.118:26657"/' $DAEMON_HOME/config/config.toml
else
  mkdir -p $DAEMON_HOME/cosmovisor/genesis
  docker run -v "$DAEMON_HOME:/home/tendermint/.HoneyWood" monetatoday/honeywood-blockchain:genesis ln -s /home/tendermint/.HoneyWood/cosmovisor/genesis /home/tendermint/.HoneyWood/cosmovisor/current
fi
