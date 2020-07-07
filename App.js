import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ethers } from 'ethers';
const { projectId, mnemonic } = require('./secrets.json');

const infuraProvider = new ethers.providers.InfuraProvider("mainnet",projectId);
const WalletNoProv = new ethers.Wallet.fromMnemonic(mnemonic);
console.log(infuraProvider.getNetwork());
const WalletwProv = WalletNoProv.connect(infuraProvider);



export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gasPrice: 0,
            balance: 0,
            account: 0
        }

    }
    componentDidMount() {
        this.getWalletTest()
    }

    async getWalletTest() {
        infuraProvider.getGasPrice().then((gasPriceRes) => {
            infuraProvider.getBalance(WalletwProv.address).then((balanceRes) => {
                this.setState({
                    balance: ethers.utils.formatEther(balanceRes),
                    account: WalletwProv.address,
                    gasPrice: gasPriceRes.toString()}, function () {
                    console.log("Wallet Updated");
                });
            });
        }).catch(err => {
            console.error(err);
        });
    }
    render() {
        const { balance, gasPrice, account } = this.state;
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app! </Text>
                <Text>Gas Price: { gasPrice }</Text>
                <Text>Account:  </Text>
                <Text>{ account }</Text>
                <Text>Balance: { balance } </Text>
                <StatusBar style="auto"/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
});
