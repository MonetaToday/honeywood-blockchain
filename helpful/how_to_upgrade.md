Update your repository and create new binary inside the cosmovisor folder:
```sh
export PATH=$PATH:/usr/local/go/bin
export DAEMON_NAME=honeyd
export DAEMON_HOME=$HOME/.HoneyWood
export BEARS_VERSION=bears-upgrade-2
export HEIGHT=4464264

git checkout ./
git pull
git checkout $BEARS_VERSION

starport chain build
mkdir -p $DAEMON_HOME/cosmovisor/upgrades/$BEARS_VERSION/bin
cp ~/go/bin/honeyd $DAEMON_HOME/cosmovisor/upgrades/$BEARS_VERSION/bin/honeyd

echo "{'name':'$BEARS_VERSION','time':'0001-01-01T00:00:00Z','height':$HEIGHT}" > $DAEMON_HOME/cosmovisor/upgrades/$BEARS_VERSION/upgrade-info.json
```

Make a proposal:
```sh
~/go/bin/cosmovisor run tx gov submit-proposal software-upgrade "bears-upgrade-1" --title "Bears upgrade 1" --description "Removed staking params limitations, added burning mechanics" --from "cone-team" --deposit "10000cone" --upgrade-height $HEIGHT --fees "10000uhoney" --yes

~/go/bin/cosmovisor run tx gov submit-proposal software-upgrade "bears-upgrade-2" --title "Bears upgrade 2" --description "Added locking coins mechanics" --from "cone-team" --deposit "10000cone" --upgrade-height $HEIGHT --fees "10000uhoney" --yes
```