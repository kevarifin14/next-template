import React, {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from 'react';

type AppearanceContextProps = {
  dark: boolean,
  setDark: Dispatch<SetStateAction<boolean>>,
};

export const AppearanceContext = createContext<AppearanceContextProps>(null);

export const useAppearanceContext = () => useContext(AppearanceContext);

type AppearanceProviderProps = {
  dark?: boolean,
  children: ReactNode,
};

export function AppearanceProvider({
  dark: defaultDark, children,
}: AppearanceProviderProps) {
  const [dark, setDark] = useState(defaultDark);

  return (
    <AppearanceContext.Provider value={{ dark, setDark }}>
      <div className={dark ? 'dark' : ''}>
        {children}
      </div>
    </AppearanceContext.Provider>
  );
}
