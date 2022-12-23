Update your repository and create new binary inside the cosmovisor folder:
```sh
git checkout ./
git pull
git checkout bears-upgrade-1

export PATH=$PATH:/usr/local/go/bin
export DAEMON_NAME=honeyd
export DAEMON_HOME=$HOME/.HoneyWood

starport chain build
mkdir -p $DAEMON_HOME/cosmovisor/upgrades/bears-upgrade-1/bin
cp ~/go/bin/honeyd $DAEMON_HOME/cosmovisor/upgrades/bears-upgrade-1/bin/honeyd
```

Make a proposal:
```sh
~/go/bin/cosmovisor run tx gov submit-proposal software-upgrade "bears-upgrade-1" --title "Bears upgrade 1" --description "Removed staking params limitations, added burning mechanics" --from "cone-company-stake-1" --deposit "10000cone" --upgrade-height HEIGHT --fees "10000uhoney" --yes
```