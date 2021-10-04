import { useContext } from 'react';

import { WalletsContext } from '.';

export default function useWalletsModalContext() {
  return useContext(WalletsContext);
}
