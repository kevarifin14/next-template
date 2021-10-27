import { NotificationsProvider, AppearanceProvider } from 'shared';

export const notificationsProviderWrapper = ({ children }) => (
  <NotificationsProvider>{children}</NotificationsProvider>
);

export const appearanceProviderWrapper = ({ children }) => (
  <AppearanceProvider>{children}</AppearanceProvider>
);
