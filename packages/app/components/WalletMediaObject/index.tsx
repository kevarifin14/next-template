import { Wallet } from '@solana/wallet-adapter-wallets';
import { MediaObject, MediaObjectProps } from 'shared';

type WalletMediaObjectProps = Omit<MediaObjectProps, 'title'> & {
  wallet: Wallet
};

export default function WalletMediaObject({ wallet, ...props }: WalletMediaObjectProps) {
  return <MediaObject title={wallet.name} src={wallet.icon} {...props} />;
}
