/* istanbul ignore file */
import { Button } from "../../components/Button";
import { event } from "../../utils/ga";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { HiSpeakerphone, HiX } from "react-icons/hi";

type IBanner = {
  message: string;
  cta: string;
  key: string;
  ctaOnClick: () => void;
  closable?: boolean;
};

type BannerContextProps = {
  banner: IBanner;
  setBanner: Dispatch<SetStateAction<IBanner>>;
};

export const BannerContext = createContext<BannerContextProps>(null);

export const useBannerContext = () => useContext(BannerContext);

type BannerProviderProps = {
  children: ReactNode;
};

export function BannerProvider({ children }: BannerProviderProps) {
  const [banner, setBanner] = useState<IBanner>(null);

  const handleClose = () => setBanner(null);

  const handleOnClick = () => {
    banner.ctaOnClick();
    event("call to action", `cta - banner`, banner.key);
  };

  return (
    <BannerContext.Provider value={{ banner, setBanner }}>
      {children}

      {banner && (
        <div className="sticky bottom-0 inset-x-0 pb-2 px-2 sm:pb-5">
          <div className="flex justify-between max-w-5xl mx-auto bg-primary p-3 sm:px-6 rounded-md">
            <div className="flex items-center">
              <HiSpeakerphone
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
              <p className="ml-3 font-medium sm:text-lg text-white">
                {banner.message}
              </p>
            </div>

            <div className="flex justify-end items-center space-x-1 sm:space-x-2">
              <Button
                type="white"
                onClick={handleOnClick}
                className="hidden sm:flex"
              >
                {banner.cta}
              </Button>

              <Button
                type="white"
                size="sm"
                onClick={handleOnClick}
                className="sm:hidden"
              >
                {banner.cta}
              </Button>

              {banner.closable && (
                <button onClick={handleClose}>
                  <HiX className="text-white text-xl font-black" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </BannerContext.Provider>
  );
}
