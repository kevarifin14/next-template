import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { getPhantomWallet, getSolletWallet } from '@solana/wallet-adapter-wallets';
import { useMemo } from 'react';

export default function WalletConnectionProvider({ children }) {
  const wallets = useMemo(() => [
    getPhantomWallet(),
    getSolletWallet(),
  ], []);

  return (
    <ConnectionProvider endpoint="http://localhost:8899">
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
}
