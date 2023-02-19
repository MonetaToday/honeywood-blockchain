#!/bin/bash

if [[ -z "${DAEMON_HOME}" ]];
then
  echo "You have to set DAEMON_HOME variable before"
  exit 1
fi

# Genesis bin
VERSION="genesis"
COSMOVISOR_DIR="cosmovisor/$VERSION"
FILE_DIR="$DAEMON_HOME/$COSMOVISOR_DIR/bin"
FILE="$FILE_DIR/honeyd"

if test -f "$FILE"; then
  echo "$FILE exists, skip"
else
  echo "$FILE doesn't exist, building..."
  mkdir -p $FILE_DIR
  docker run -v "$DAEMON_HOME:/home/tendermint/.HoneyWood" monetatoday/honeywood-blockchain:$VERSION cp ./honeyd /home/tendermint/.HoneyWood/$COSMOVISOR_DIR/bin/
  # docker run -v "$DAEMON_HOME:/home/tendermint/.HoneyWood" monetatoday/honeywood-blockchain:$VERSION ignite chain build --output /home/tendermint/.HoneyWood/$COSMOVISOR_DIR/bin
fi

# Bears-upgrade-1 bin
VERSION="bears-upgrade-1"
COSMOVISOR_DIR="cosmovisor/upgrades/$VERSION"
FILE_DIR="$DAEMON_HOME/$COSMOVISOR_DIR/bin"
FILE="$FILE_DIR/honeyd"
if test -f "$FILE"; then
  echo "$FILE exists, skip"
else
  echo "$FILE doesn't exist, building..."
  mkdir -p $FILE_DIR
  docker run -v "$DAEMON_HOME:/home/tendermint/.HoneyWood" monetatoday/honeywood-blockchain:$VERSION cp ./honeyd /home/tendermint/.HoneyWood/$COSMOVISOR_DIR/bin/
  # docker run -v "$DAEMON_HOME:/home/tendermint/.HoneyWood" monetatoday/honeywood-blockchain:$VERSION ignite chain build --output /home/tendermint/.HoneyWood/$COSMOVISOR_DIR/bin
fi

# Bears-upgrade-2 bin
VERSION="bears-upgrade-2"
COSMOVISOR_DIR="cosmovisor/upgrades/$VERSION"
FILE_DIR="$DAEMON_HOME/$COSMOVISOR_DIR/bin"
FILE="$FILE_DIR/honeyd"
if test -f "$FILE"; then
  echo "$FILE exists, skip"
else
  echo "$FILE doesn't exist, building..."
  mkdir -p $FILE_DIR
  docker run -v "$DAEMON_HOME:/home/tendermint/.HoneyWood" monetatoday/honeywood-blockchain:$VERSION cp ./honeyd /home/tendermint/.HoneyWood/$COSMOVISOR_DIR/bin/
  # docker run -v "$DAEMON_HOME:/home/tendermint/.HoneyWood" monetatoday/honeywood-blockchain:$VERSION ignite chain build --output /home/tendermint/.HoneyWood/$COSMOVISOR_DIR/bin
fi

if test ! -L "$DAEMON_HOME/cosmovisor/current"; then
  docker run -v "$DAEMON_HOME:/home/tendermint/.HoneyWood" monetatoday/honeywood-blockchain:$VERSION ln -s /home/tendermint/.HoneyWood/$COSMOVISOR_DIR /home/tendermint/.HoneyWood/cosmovisor/current
fi

# Run node by using cosmovisor
docker run -p 26657:26657 -p 26656:26656 -v "$DAEMON_HOME:/home/tendermint/.HoneyWood" monetatoday/honeywood-blockchain:$VERSION /go/src/github.com/cosmos/cosmovisor run start
