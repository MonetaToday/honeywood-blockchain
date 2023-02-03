FROM ignitehq/cli:0.20.0

ENV DAEMON_HOME=/home/tendermint/.HoneyWood
ENV DAEMON_NAME=honeyd

WORKDIR /go/src/github.com/cosmos
RUN curl -L https://github.com/cosmos/cosmos-sdk/releases/download/cosmovisor%2Fv1.1.0/cosmovisor-v1.1.0-linux-amd64.tar.gz | tar xz

WORKDIR /go/src/github.com/MonetaToday/honeywood-blockchain
COPY --chown=tendermint . .
RUN chmod -R 777 ./

RUN ignite chain build --output ./

EXPOSE 26656 26657 1317 9090

ENTRYPOINT [""]