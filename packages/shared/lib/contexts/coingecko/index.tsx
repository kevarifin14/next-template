import React, { useContext, useEffect, useState, createContext } from "react";

export const COINGECKO_POOL_INTERVAL = 1000 * 60; // 60 sec
export const COINGECKO_API = "https://api.coingecko.com/api/v3/simple/price";

export interface CoingeckoContextState {
  solPrice: number;
}

export const solToUSD = async (): Promise<number> => {
  const url = `${COINGECKO_API}?ids=solana&vs_currencies=usd`;
  const resp = await window.fetch(url).then((r) => r.json());
  return resp.solana.usd;
};

const CoingeckoContext = createContext<CoingeckoContextState>(null);

export function CoingeckoProvider({ children = null as any }) {
  const [solPrice, setSolPrice] = useState<number>(0);

  useEffect(() => {
    let timerId = 0;

    const startTimer = () => {
      timerId = window.setTimeout(async () => {
        queryPrice();
      }, COINGECKO_POOL_INTERVAL);
    };

    const queryPrice = async () => {
      const solprice = await solToUSD();
      setSolPrice(solprice);
      startTimer();
    };

    queryPrice();

    return () => {
      clearTimeout(timerId);
    };
  }, [setSolPrice]);

  return (
    <CoingeckoContext.Provider value={{ solPrice }}>
      {children}
    </CoingeckoContext.Provider>
  );
}

export const useCoingecko = () => {
  const context = useContext<CoingeckoContextState>(CoingeckoContext);
  return context;
};

export const useSolPrice = () => {
  const { solPrice } = useCoingecko();

  return solPrice;
};
