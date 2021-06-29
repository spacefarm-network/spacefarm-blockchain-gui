import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.SPACEFARM]: IS_MAINNET ? 'XCH' : 'TXCH',
};
