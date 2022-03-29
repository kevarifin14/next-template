import {
  ApolloClientProvider,
  AppearanceProvider,
  BannerProvider,
  CoingeckoProvider,
  Notification,
} from "@next-template/shared";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import WalletConnectionProvider from "contexts/walletConnection";
import { FC } from "react";

export const Providers: FC = ({ children }) => {
  return (
    <AppearanceProvider dark>
      <BannerProvider>
        <ApolloClientProvider>
          <WalletConnectionProvider>
            <WalletModalProvider>{children}</WalletModalProvider>
          </WalletConnectionProvider>
        </ApolloClientProvider>
      </BannerProvider>
    </AppearanceProvider>
  );
};
