import React, {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from 'react';

import { classNames } from '../../utils/tailwind';

type AppearanceContextProps = {
  dark: boolean,
  setDark?: Dispatch<SetStateAction<boolean>>,
};

export const AppearanceContext = createContext<AppearanceContextProps>({ dark: false });

export const useAppearanceContext = () => useContext(AppearanceContext);

type AppearanceProviderProps = {
  dark?: boolean,
  children: ReactNode,
};

export function AppearanceProvider({
  dark: defaultDark, children,
}: AppearanceProviderProps) {
  const [dark, setDark] = useState(defaultDark);

  const appearanceClassName = classNames(
    'transform transition-colors h-full bg-light dark:bg-dark',
  );

  return (
    <AppearanceContext.Provider value={{ dark, setDark }}>
      <div className={dark ? 'dark' : ''}>
        <div className={appearanceClassName}>
          {children}
        </div>
      </div>
    </AppearanceContext.Provider>
  );
}
