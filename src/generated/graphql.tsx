import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  errors?: Maybe<Array<FieldError>>;
  accessToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAdmin: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: LoginResponse;
  addUserType: Scalars['Boolean'];
  setUserTypeForUser: Scalars['Boolean'];
};


export type MutationAddAdminArgs = {
  pansuns: Scalars['Int'];
  tokenVersion: Scalars['Int'];
  password: Scalars['String'];
  idDiscord: Scalars['String'];
  inGamePseudo: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  email: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationAddUserTypeArgs = {
  name: Scalars['String'];
};


export type MutationSetUserTypeForUserArgs = {
  userTypeId: Scalars['String'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  listAllUser: Array<User>;
  getUserWithTypes: User;
  listAllTypes: Array<UserType>;
  getUserTypeByUser: Array<UserHaveType>;
};


export type QueryGetUserWithTypesArgs = {
  userId: Scalars['String'];
};


export type QueryGetUserTypeByUserArgs = {
  userId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  userId: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  inGamePseudo: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  idDiscord: Scalars['String'];
  tokenVersion: Scalars['Int'];
  pansuns: Scalars['Int'];
  types: Array<UserHaveType>;
};

export type UserHaveType = {
  __typename?: 'UserHaveType';
  userHaveTypeId: Scalars['String'];
  userUserId: Scalars['String'];
  typeTypeId: Scalars['String'];
  user: User;
  type: UserType;
};

export type UserType = {
  __typename?: 'UserType';
  typeId: Scalars['String'];
  name: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'firstName' | 'lastName' | 'email'>
    ), errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);


export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    user {
      userId
      firstName
      lastName
      email
    }
    errors {
      field
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;