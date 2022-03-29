/* istanbul ignore file */
import {
  AccountLayout,
  u64,
  AccountInfo as TokenAccountInfo,
  MintInfo,
} from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";

export const deserializeTokenAccount = (address: PublicKey, data: Buffer) => {
  const {
    mint,
    owner,
    amount,
    delegateOption,
    delegate,
    delegatedAmount,
    state,
    isNative,
    isNativeOption,
    closeAuthority,
    closeAuthorityOption,
  } = AccountLayout.decode(data);

  const accountInfo: TokenAccountInfo = {
    address,
    mint: new PublicKey(mint),
    owner: new PublicKey(owner),
    amount: u64.fromBuffer(amount),
    isInitialized: state !== 0,
    isFrozen: state === 2,

    ...(delegateOption === 0
      ? { delegate: null, delegatedAmount: new u64(0) }
      : {
          delegate: new PublicKey(delegate),
          delegatedAmount: u64.fromBuffer(delegatedAmount),
        }),

    ...(isNativeOption === 1
      ? { rentExemptReserve: u64.fromBuffer(isNative), isNative: true }
      : { rentExemptReserve: null, isNative: false }),

    ...(closeAuthorityOption === 0
      ? { closeAuthority: null }
      : { closeAuthority: new PublicKey(closeAuthority) }),
  };

  return accountInfo;
};

export const diffTokenAccountInfoAmounts = (
  prevTokenAccountInfo: TokenAccountInfo,
  tokenAccountInfo: TokenAccountInfo
) => {
  if (!prevTokenAccountInfo) {
    return tokenAccountInfo.amount;
  }

  return tokenAccountInfo.amount.sub(prevTokenAccountInfo.amount);
};

export const fromLamports = (
  tokenAccountInfo: TokenAccountInfo | number,
  mintInfo?: MintInfo
) => {
  if (!tokenAccountInfo) {
    return 0;
  }

  const amount =
    typeof tokenAccountInfo === "number"
      ? tokenAccountInfo
      : tokenAccountInfo.amount.toNumber();

  const precision = 10 ** (mintInfo?.decimals || 9);
  return amount / precision;
};

export function formatTokenAmount(
  tokenAccountInfo: TokenAccountInfo | number,
  mintInfo?: MintInfo,
  prefix = "",
  suffix = "",
  precision = 3
): string {
  return `${[prefix]}${fromLamports(tokenAccountInfo, mintInfo).toFixed(
    precision
  )}${suffix}`;
}

export const formatDollar = (value) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(value);
};
