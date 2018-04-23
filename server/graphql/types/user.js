// @flow
import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLNonNull
} from "graphql";

export type GraphUserType = {|
  id: string,
  firstName: string,
  lastName: string,
  email: string
|};
export const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID)
    },
    firstName: {
      type: GraphQLNonNull(GraphQLString)
    },
    lastName: {
      type: GraphQLNonNull(GraphQLString)
    },
    email: {
      type: GraphQLNonNull(GraphQLString)
    }
  }
});

export type GraphUserInputType = {|
  firstName: string,
  lastName: string,
  email: string,
  password: string
|};
export const UserInputType = new GraphQLInputObjectType({
  name: "UserInput",
  fields: {
    firstName: {
      type: GraphQLNonNull(GraphQLString)
    },
    lastName: {
      type: GraphQLNonNull(GraphQLString)
    },
    email: {
      type: GraphQLNonNull(GraphQLString)
    },
    password: {
      type: GraphQLNonNull(GraphQLString)
    }
  }
});
