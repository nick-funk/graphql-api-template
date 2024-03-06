import { HelloPayload } from './resolvers/HelloPayload';
import { HelloResult } from './resolvers/HelloResult';
import { Query } from './resolvers/Query';
import { RollDiceResult } from './resolvers/RollDiceResult';
import { Viewer } from './resolvers/Viewer';

export const buildRoot = () => {
  return {
    Query,
    RollDiceResult,
    HelloResult,
    HelloPayload,
    Viewer,
  };
};
