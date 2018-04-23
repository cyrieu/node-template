// @flow
import { GraphQLNonNull } from "graphql";
import { ChannelInputType, ChannelType } from "../types/channel";
import { User, Channel } from "../../models/index";
import { Op } from "sequelize";

export const createChannel = {
  type: ChannelType,
  args: {
    input: {
      type: GraphQLNonNull(ChannelInputType)
    }
  },
  resolve: async (rootValue: mixed, args: any) => {
    const input = args.input;
    try {
      const { name, isPublic, isDm, memberIds } = input;
      const users = await User.findAll({
        where: {
          id: {
            [Op.or]: memberIds
          }
        }
      });
      console.log(users);
      const channel = await Channel.create({
        name,
        isPublic,
        isDm
      });
      console.log("CHANNEL CREAETD");
      console.log(channel);
      channel.setUsers(memberIds);
      return channel;
    } catch (e) {
      console.error(e);
      return {
        error: "FUC"
      };
    }
  }
};
