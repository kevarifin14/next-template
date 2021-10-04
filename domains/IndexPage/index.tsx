import WalletsMenu from 'contexts/wallets/WalletsMenu';

export default function IndexPage() {
  return (
    <div className="mx-auto max-w-sm w-full">
      <WalletsMenu onClick={(wallet) => alert(wallet.name)} />
    </div>
  );
}
