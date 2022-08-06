To make param-change proposal you should run the script below:
```sh
~/go/bin/honeyd tx gov submit-proposal param-change ./changes/change-4.json --from team --fees 30000uhoney --gas 500000
```

To approve the proposal the most number of validators have to vote for it:
```sh
~/go/bin/honeyd tx gov vote 4 yes --from "team" --fees 10000uhoney 
```

To see which proposals are in queue or approved you can run this command:
```sh
~/go/bin/honeyd query gov proposals
```