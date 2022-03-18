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

go test ./x/bears/client/cli/query_calculate_honey_in_apiary_test.go -v

////
~/go/bin/honeyd tx bears init-game-and-extend-field --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears extend-field 0 --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears extend-field 0 --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears extend-field 0 --from bob --fees 10000uhoney --yes

~/go/bin/honeyd tx bears create-apiary 0 0 0 0 APIARY --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears create-tree 0 0 0 1 OAK --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears create-decoration 0 FOUNTAIN --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears set-decoration-position 0 0 0 2 --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears create-apiary 0 0 0 3 APIARY --from bob --fees 10000uhoney --yes

~/go/bin/honeyd tx bears create-tree 0 0 1 0 OAK --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears create-decoration 0 FOUNTAIN --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears set-decoration-position 1 0 1 1 --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears create-apiary 0 0 1 2 APIARY --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears create-apiary 0 0 1 3 APIARY --from bob --fees 10000uhoney --yes
////

~/go/bin/honeyd tx bears init-game-and-create-bee BEE BEE --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears create-bee 0 BEE BEE --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears create-bee 0 BEE BEE --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears create-apiary bears1r5hfvx924r36n4wg8r0pplvevlhrynehulclmw 0 0 0 0 APIARY --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears set-apiary-house-for-bee 0 0 --from bob --fees 10000uhoney --yes 
~/go/bin/honeyd tx bears set-apiary-house-for-bee 1 0 --from bob --fees 10000uhoney --yes 
~/go/bin/honeyd tx bears set-apiary-house-for-bee 2 0 --from bob --fees 10000uhoney --yes

~/go/bin/honeyd tx bears set-apiary-house-for-bee 3 0 --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears set-apiary-house-for-bee 4 0 --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears set-apiary-house-for-bee 5 0 --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears set-apiary-house-for-bee 6 0 --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears set-apiary-house-for-bee 7 0 --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears set-apiary-house-for-bee 8 0 --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears set-apiary-house-for-bee 9 0 --from bob --fees 10000uhoney --yes
 
~/go/bin/honeyd query bears calculate-honey-in-apiary 0
~/go/bin/honeyd tx bears unset-apiary-house-for-bee 0 --from bob --fees 10000uhoney --yes 
~/go/bin/honeyd query bears list-apiaries

~/go/bin/honeyd tx bears collect-honey-from-apiary 0 --from bob --fees 10000uhoney --yes
~/go/bin/honeyd query bears list-apiaries
~/go/bin/honeyd query bears calculate-honey-in-apiary 0 
~/go/bin/honeyd query bank balances bears1jha5494q2lh3htkanddczkuuv7gtm80edrxc36


~/go/bin/honeyd tx bears clear-apiary-from-bees 0 --from bob --fees 10000uhoney --yes
~/go/bin/honeyd query bears list-apiaries


~/go/bin/honeyd tx bears extend-field 0 --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears create-tree 0 0 1 0 SPRUCE --from bob --fees 10000uhoney --yes

~/go/bin/honeyd query bears show-air-info

~/go/bin/honeyd tx bears init-game-and-create-apiary bears1jahl8ydaeuax9vqx4rfxzhpl3dcft5ndqhlr4e APIARY --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears create-bee bears1jahl8ydaeuax9vqx4rfxzhpl3dcft5ndqhlr4e 0 BEE BEE --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears set-apiary-house-for-bee 0 0 --from bob --fees 10000uhoney --yes 
~/go/bin/honeyd tx bears create-bee 0 BEE BEE --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears clear-apiary-from-bees 0 --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears delete-apiary 0 --from bob --fees 10000uhoney --yes


~/go/bin/honeyd tx bears create-apiary bears1jahl8ydaeuax9vqx4rfxzhpl3dcft5ndqhlr4e 0 0 0 0 APIARY --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears move-item-on-field 0 0 0 1 1 --from bob --fees 10000uhoney --yes



~/go/bin/honeyd tx bears init-game-and-create-apiary bears1r5hfvx924r36n4wg8r0pplvevlhrynehulclmw APIARY --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears create-bee bears1r5hfvx924r36n4wg8r0pplvevlhrynehulclmw 0 BEE BEE --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears set-apiary-house-for-bee 0 0 --from bob --fees 10000uhoney --yes 
~/go/bin/honeyd tx bears unset-apiary-house-for-bee 0 --from bob --fees 10000uhoney --yes 
~/go/bin/honeyd query bears list-apiaries

~/go/bin/honeyd tx bears init-game-and-create-apiary bears10teyhjekk2wn2945kzj4g73d8jvhklzvw6x05g APIARY --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears extend-field bears10teyhjekk2wn2945kzj4g73d8jvhklzvw6x05g 0 --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears create-apiary bears10teyhjekk2wn2945kzj4g73d8jvhklzvw6x05g 0 0 1 1 APIARY --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears create-bee bears10teyhjekk2wn2945kzj4g73d8jvhklzvw6x05g 0 BEE BEE --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears create-bee bears10teyhjekk2wn2945kzj4g73d8jvhklzvw6x05g 0 BEE BEE --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears set-apiary-house-for-bee 0 0 --from bob --fees 10000uhoney --yes 
~/go/bin/honeyd tx bears set-apiary-house-for-bee 1 1 --from bob --fees 10000uhoney --yes 
~/go/bin/honeyd tx bears create-bee bears10teyhjekk2wn2945kzj4g73d8jvhklzvw6x05g 0 BEE BEE --from bob --fees 10000uhoney --yes
~/go/bin/honeyd tx bears set-apiary-house-for-bee 2 1 --from bob --fees 10000uhoney --yes 

~/go/bin/honeyd tx bears create-decoration bears10teyhjekk2wn2945kzj4g73d8jvhklzvw6x05g 0 FOUNTAIN --from bob --fees 10000uhoney --yes

~/go/bin/honeyd query bears show-apiaries-info-by-bear-id 0
