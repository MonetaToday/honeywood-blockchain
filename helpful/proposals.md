To make param-change proposal you should run the script below:
```sh
~/go/bin/honeyd tx gov submit-proposal param-change ./changes/change-8.json --from cone-team --fees 400000uhoney --gas 2000000
```

To approve the proposal the most number of validators have to vote for it:
```sh
~/go/bin/honeyd tx gov vote 8 yes --from "cone-company-stake-1" --fees 10000uhoney --yes
```

To see which proposals are in queue or approved you can run this command:
```sh
~/go/bin/honeyd query gov proposals
```

To make text proposal you should run the script below:
```sh
~/go/bin/honeyd tx gov submit-proposal --title="Test proposal" --description="Test description" --type="Text" --from "team" --fees 30000uhoney --gas 500000 --deposit="10000cone"
```