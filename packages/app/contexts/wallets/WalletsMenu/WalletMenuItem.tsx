import { Menu } from '@headlessui/react';
import { Wallet } from '@solana/wallet-adapter-wallets';
import { classNames, useAppearanceContext } from 'shared';

import WalletMediaObject from 'components/WalletMediaObject';

type WalletMenuItemProps = {
  wallet: Wallet,
  onClick: (wallet: Wallet) => void,
};

export default function WalletMenuItem({ wallet, onClick }: WalletMenuItemProps) {
  const { dark } = useAppearanceContext();

  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={() => onClick(wallet)}
          className={classNames(
            'rounded-md flex space-x-2 w-full p-4',
            active ? 'bg-primary-200 dark:bg-primary-800' : '',
          )}
        >
          <WalletMediaObject wallet={wallet} dark={dark} />
        </button>
      )}
    </Menu.Item>
  );
}
