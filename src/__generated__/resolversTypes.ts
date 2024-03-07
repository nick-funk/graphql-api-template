import { GraphQLResolveInfo } from 'graphql';
import { GraphContext } from '../graphContext';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type HelloPayload = {
  __typename?: 'HelloPayload';
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type HelloResult = {
  __typename?: 'HelloResult';
  id?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<HelloPayload>;
};

export type Query = {
  __typename?: 'Query';
  adminsOnly?: Maybe<Scalars['String']['output']>;
  hello?: Maybe<HelloResult>;
  rest?: Maybe<RestResult>;
  rollDice?: Maybe<RollDiceResult>;
  viewer?: Maybe<Viewer>;
};


export type QueryRollDiceArgs = {
  numDice: Scalars['Int']['input'];
  numSides?: InputMaybe<Scalars['Int']['input']>;
};

export type RestResult = {
  __typename?: 'RestResult';
  message?: Maybe<Scalars['String']['output']>;
};

export enum Role {
  Admin = 'ADMIN',
  Unknown = 'UNKNOWN',
  User = 'USER'
}

export type RollDiceResult = {
  __typename?: 'RollDiceResult';
  id?: Maybe<Scalars['String']['output']>;
  numDice?: Maybe<Scalars['Int']['output']>;
  numSides?: Maybe<Scalars['Int']['output']>;
  rolls?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type Viewer = {
  __typename?: 'Viewer';
  id?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  HelloPayload: ResolverTypeWrapper<HelloPayload>;
  HelloResult: ResolverTypeWrapper<HelloResult>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Query: ResolverTypeWrapper<{}>;
  RestResult: ResolverTypeWrapper<RestResult>;
  Role: Role;
  RollDiceResult: ResolverTypeWrapper<RollDiceResult>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Viewer: ResolverTypeWrapper<Viewer>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  HelloPayload: HelloPayload;
  HelloResult: HelloResult;
  Int: Scalars['Int']['output'];
  Query: {};
  RestResult: RestResult;
  RollDiceResult: RollDiceResult;
  String: Scalars['String']['output'];
  Viewer: Viewer;
}>;

export type AuthDirectiveArgs = {
  requires?: Maybe<Role>;
};

export type AuthDirectiveResolver<Result, Parent, ContextType = GraphContext, Args = AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type HelloPayloadResolvers<ContextType = GraphContext, ParentType extends ResolversParentTypes['HelloPayload'] = ResolversParentTypes['HelloPayload']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HelloResultResolvers<ContextType = GraphContext, ParentType extends ResolversParentTypes['HelloResult'] = ResolversParentTypes['HelloResult']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['HelloPayload']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = GraphContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  adminsOnly?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hello?: Resolver<Maybe<ResolversTypes['HelloResult']>, ParentType, ContextType>;
  rest?: Resolver<Maybe<ResolversTypes['RestResult']>, ParentType, ContextType>;
  rollDice?: Resolver<Maybe<ResolversTypes['RollDiceResult']>, ParentType, ContextType, RequireFields<QueryRollDiceArgs, 'numDice'>>;
  viewer?: Resolver<Maybe<ResolversTypes['Viewer']>, ParentType, ContextType>;
}>;

export type RestResultResolvers<ContextType = GraphContext, ParentType extends ResolversParentTypes['RestResult'] = ResolversParentTypes['RestResult']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RollDiceResultResolvers<ContextType = GraphContext, ParentType extends ResolversParentTypes['RollDiceResult'] = ResolversParentTypes['RollDiceResult']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numDice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numSides?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rolls?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ViewerResolvers<ContextType = GraphContext, ParentType extends ResolversParentTypes['Viewer'] = ResolversParentTypes['Viewer']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = GraphContext> = ResolversObject<{
  HelloPayload?: HelloPayloadResolvers<ContextType>;
  HelloResult?: HelloResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RestResult?: RestResultResolvers<ContextType>;
  RollDiceResult?: RollDiceResultResolvers<ContextType>;
  Viewer?: ViewerResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = GraphContext> = ResolversObject<{
  auth?: AuthDirectiveResolver<any, any, ContextType>;
}>;
