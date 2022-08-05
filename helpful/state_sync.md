Show current BLOCK_HEIGHT and BLOCK_HASH to put it to the next commands:
```sh
  curl -s http://139.162.235.179:26657/commit | jq "{height: .result.signed_header.header.height, hash: .result.signed_header.commit.block_id.hash}"
```

Change configs chain:
```sh
  cp ./genesis/mainnet.json $DAEMON_HOME/config/genesis.json
  sed -i -e "/moniker =/ s/= .*/= \"$NODE_NAME\"/" $DAEMON_HOME/config/config.toml
  sed -i -e 's/timeout_commit = "5s"/timeout_commit = "4s"/' $DAEMON_HOME/config/config.toml
  sed -i -e 's/seeds = ""/seeds = "abc0ceacf8d74c6d095e8b9d555ea87e40137f57@139.162.241.189:26656"/' $DAEMON_HOME/config/config.toml
  sed -i'' 's/enable = false/enable = true/' $DAEMON_HOME/config/config.toml
  sed -i'' 's/trust_height = 0/trust_height = <BLOCK_HEIGHT>/' $DAEMON_HOME/config/config.toml
  sed -i'' 's/trust_hash = ""/trust_hash = "<BLOCK_HASH>"/' $DAEMON_HOME/config/config.toml
  sed -i'' 's/rpc_servers = ""/rpc_servers = "http:\/\/139.162.235.179:26657,http:\/\/139.162.192.118:26657"/' $DAEMON_HOME/config/config.toml
```

After that you can run your node bin.