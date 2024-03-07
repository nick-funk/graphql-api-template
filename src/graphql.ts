import { Mutation } from './mutators/Mutation';
import { HelloPayload } from './resolvers/HelloPayload';
import { HelloResult } from './resolvers/HelloResult';
import { Query } from './resolvers/Query';
import { RollDiceResult } from './resolvers/RollDiceResult';
import { Viewer } from './resolvers/Viewer';

export const buildRoot = () => {
  return {
    Query,
    Mutation,
    RollDiceResult,
    HelloResult,
    HelloPayload,
    Viewer,
  };
};
