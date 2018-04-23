// @flow
import { UserType } from "../types/user";
import { GraphQLNonNull, GraphQLID } from "graphql";
import { User } from "../../models/index";

const user = {
  type: UserType,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (rootValue: mixed, args: any) => {
    const id: string = args.id;
    try {
      const user = await User.findById(id);
      return user;
    } catch (e) {
      console.error(e);
      return {
        errors: "GOD DAMN"
      };
    }
  }
};

export default user;
