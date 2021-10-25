import { useWallet } from '@solana/wallet-adapter-react';
import { Wallet } from '@solana/wallet-adapter-wallets';
import { useEffect } from 'react';
import { Modal, ModalProps } from 'shared';

import WalletsMenu from './WalletsMenu';

export default function WalletsModal(props: ModalProps) {
  const { select, connect, wallet } = useWallet();

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
    props.onClose();
  };

  return (
    <Modal {...props}>
      <WalletsMenu onClick={handleConnectWallet} />
    </Modal>
  );
}
