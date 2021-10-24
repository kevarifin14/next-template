import { useWallet } from '@solana/wallet-adapter-react';
import { Wallet } from '@solana/wallet-adapter-wallets';
import { useEffect } from 'react';

import Modal, { ModalProps } from 'components/Modal';

import useWalletsContext from './useWalletsContext';
import WalletsMenu from './WalletsMenu';

export default function WalletsModal(props: ModalProps) {
  const { select, connect, wallet } = useWallet();
  const { setOpen } = useWalletsContext();

  useEffect(() => {
    if (wallet) {
      connect();
    }
  }, [wallet]);

  const handleConnectWallet = async (selectedWallet: Wallet) => {
    try {
      await select(selectedWallet.name);
    } catch (e) {
      alert('fail');
    }
    setOpen(false);
  };

  return (
    <Modal {...props}>
      <WalletsMenu onClick={handleConnectWallet} />
    </Modal>
  );
}
