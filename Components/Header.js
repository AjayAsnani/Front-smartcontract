import { ConnectButton } from "@web3uikit/web3";
//ConnectButton button has changed to ConnectWallet button in newer versions of web3uikit

export default function Header() {
  return (
    <div>
      Decentralized Lottery
      <ConnectButton moralisAuth={false} />
    </div>
  );
}
