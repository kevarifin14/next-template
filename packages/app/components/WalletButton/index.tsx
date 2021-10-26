import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from 'shared';

import { useWalletsModalContext } from 'contexts/wallets';

import WalletDropdown from './WalletDropdown';

export default function WalletButton(props) {
  const { wallet, connected } = useWallet();
  const { setOpen } = useWalletsModalContext();

  return (
    wallet && connected
      ? <WalletDropdown />
      : (
        <Button type="primary" onClick={() => setOpen(true)} {...props}>
          Connect wallet
        </Button>
      )
  );
}
