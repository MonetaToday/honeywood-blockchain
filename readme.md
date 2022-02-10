# honeywood
**honeywood** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://starport.com).

## Get started

```
starport chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.com).

### Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.starport.com/MonetaToday/HoneyWood@latest! | sudo bash
```
`MonetaToday/HoneyWood` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Starport](https://starport.com)
- [Tutorials](https://docs.starport.com/guide)
- [Starport docs](https://docs.starport.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/H6wGTY8sxw)


~/go/bin/HoneyWoodd tx bears init-game-and-create-bee BEE BEE --from bob --fees 1honey --yes
~/go/bin/HoneyWoodd tx bears create-bee 0 BEE BEE --from bob --fees 1honey --yes
~/go/bin/HoneyWoodd tx bears create-apiary 0 0 0 0 APIARY --from bob --fees 1honey --yes
~/go/bin/HoneyWoodd tx bears set-apiary-house-for-bee 0 0 --from bob --fees 1honey --yes 
~/go/bin/HoneyWoodd tx bears set-apiary-house-for-bee 1 0 --from bob --fees 1honey --yes 

~/go/bin/HoneyWoodd tx bears set-apiary-house-for-bee 2 0 --from bob --fees 1honey --yes 
~/go/bin/HoneyWoodd query bears calculate-honey-in-apiary 0
~/go/bin/HoneyWoodd tx bears unset-apiary-house-for-bee 0 --from bob --fees 1honey --yes 
~/go/bin/HoneyWoodd query bears list-apiaries

~/go/bin/HoneyWoodd tx bears collect-honey-from-apiary 0 --from bob --fees 1honey --yes
~/go/bin/HoneyWoodd query bears list-apiaries
~/go/bin/HoneyWoodd query bears calculate-honey-in-apiary 0 
~/go/bin/HoneyWoodd query bank balances bears1jha5494q2lh3htkanddczkuuv7gtm80edrxc36


~/go/bin/HoneyWoodd tx bears collect-honey-and-clear-apiary-from-bees 0 --from bob --fees 1honey --yes
~/go/bin/HoneyWoodd query bears list-apiaries