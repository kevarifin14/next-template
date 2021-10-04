import { createContext, ReactNode, useState } from 'react';

import WalletsModal from './WalletsModal';

type WalletsContextProps = {
  open: boolean,
  setOpen: (open: boolean) => void,
}

type WalletsProviderProps = {
  children: ReactNode,
}

export const WalletsContext = createContext<WalletsContextProps>(null);

export default function WalletsProvider({ children }: WalletsProviderProps) {
  const [open, setOpen] = useState(false);

  return (
    <WalletsContext.Provider value={{ open, setOpen }}>
      {children}
      <WalletsModal open={open} onClose={() => setOpen(false)} />
    </WalletsContext.Provider>
  );
}
