This network is managed by community voting.

The coins which are deposited to a proposal will burn either:
1) MinDeposit has't been reached by the end of deposit period;
2) VetoThreshold votes count is greater than 0.334% of voting power.


## Take part in the consensus

Firstly install Go:
```sh
  https://golang.org/doc/install
  
  wget https://go.dev/dl/go1.18.2.linux-amd64.tar.gz
  rm -rf /usr/local/go && tar -C /usr/local -xzf go1.18.2.linux-amd64.tar.gz
  export PATH=$PATH:/usr/local/go/bin
```

In Ubuntu please install:
```sh
  apt update
  apt install make gcc
```

Set envs:
```sh
  export DAEMON_NAME=honeyd
  export DAEMON_HOME=$HOME/.HoneyWood
  export NODE_NAME=YOUR_NODE_NAME
```

Init chain:
```sh
  git clone https://github.com/MonetaToday/honeywood-blockchain.git -b v0.1.5
  cd honeywood-blockchain
  curl https://get.starport.network/starport! | bash
  starport chain init
```

Show your node ID:
```sh
  ~/go/bin/honeyd tendermint show-node-id
```

Change configs chain:
```sh
  cp ./genesis/testnet.json $DAEMON_HOME/config/genesis.json
  sed -i -e "/moniker =/ s/= .*/= \"$NODE_NAME\"/" $DAEMON_HOME/config/config.toml
  sed -i'' 's/seeds = ""/seeds = "e061db65e7de5f33578794da194b32ceff40a2ea@139.162.241.189:26656"/' $DAEMON_HOME/config/config.toml
```

Init cosmovisor:
```sh
  git clone https://github.com/cosmos/cosmos-sdk.git -b cosmovisor/v1.1.0
  cd cosmos-sdk
  make cosmovisor
  cp cosmovisor/cosmovisor ~/go/bin/cosmovisor
  mkdir -p $DAEMON_HOME/cosmovisor/genesis/bin
  cp $HOME/go/bin/$DAEMON_NAME $DAEMON_HOME/cosmovisor/genesis/bin
```

## Creating daemon service

Make systemd service:
```sh
  mkdir -p /var/log/honeyd
  touch /var/log/honeyd/honeyd.log
  touch /var/log/honeyd/honeyd_error.log
  touch /etc/systemd/system/honeyd.service
```

Then provide the service:
```sh
  nano /etc/systemd/system/honeyd.service
```

with:
```sh
  [Unit]
  Description=honey daemon
  After=network-online.target
  [Service]
  Environment="DAEMON_NAME=honeyd"
  Environment="DAEMON_HOME=/root/.HoneyWood"
  User=root
  ExecStart=/root/go/bin/cosmovisor start
  StandardOutput=file:/var/log/honeyd/honeyd.log
  StandardError=file:/var/log/honeyd/honeyd_error.log
  Restart=always
  RestartSec=3
  LimitNOFILE=4096
  [Install]
  WantedBy=multi-user.target
```

And enable the service:
```sh
  systemctl enable honeyd.service
```

Then start it:
```sh
  systemctl start honeyd.service
```

You can see logs:
```sh
  journalctl -u honeyd -f
```

Or:
```sh
  tail -n 100 /var/log/honeyd/honeyd_error.log
```

## Security settings

Config your firewall:
```sh
  sudo ufw default deny incoming
  sudo ufw default allow outgoing
  sudo ufw allow OpenSSH
  sudo ufw allow 80/tcp
  sudo ufw allow 443/tcp
  sudo ufw allow 60000:61000/udp
  sudo ufw allow 26656/tcp
  sudo ufw allow 26657/tcp
  sudo ufw allow 1317/tcp
  sudo ufw allow 8080/tcp
  sudo ufw --force enable
```