// @flow
import {
  UserType,
  UserInputType,
  type GraphUserInputType
} from "../types/user";
import { GraphQLNonNull } from "graphql";
import { User } from "../../models";

export const createUser = {
  type: UserType,
  args: {
    input: {
      type: GraphQLNonNull(UserInputType)
    }
  },
  resolve: async (rootValue: mixed, args: any) => {
    const input: GraphUserInputType = args.input;
    try {
      console.log(args);
      const newUser = await User.create(input);
      return newUser;
    } catch (e) {
      console.error(e);
      return {
        errors: "GOD DAMN"
      };
    }
  }
};
