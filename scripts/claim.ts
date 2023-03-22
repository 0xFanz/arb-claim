import { Contract, ethers, providers, Wallet } from 'ethers';
import abi from '../abi/TokenDistributor.json';

const provider = new providers.JsonRpcProvider("https://arb1.arbitrum.io/rpc")
const contract = new Contract("0x67a24ce4321ab3af51c2d0a4801c3e111d88c9d9", abi, provider)

async function main() {
    // add private keys here
    const wallets: string[] = [
        // "private_key_1",
        // "private_key_2",
    ];

    await Promise.all(wallets.map(async function (privateKey: string) {
        const wallet = new Wallet(privateKey, provider);
        await claim(wallet);
    }))

    console.log("Done !");
}

async function claim(wallet: Wallet) {
    await contract.connect(wallet).claim();
}

main();
