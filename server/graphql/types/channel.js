// @flow
import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLList
} from "graphql";

export const ChannelType = new GraphQLObjectType({
  name: "Channel",
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    public: {
      type: GraphQLNonNull(GraphQLBoolean)
    },
    dm: {
      type: GraphQLNonNull(GraphQLBoolean)
    }
  }
});

export const ChannelInputType = new GraphQLInputObjectType({
  name: "ChannelInput",
  fields: {
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    isPublic: {
      type: GraphQLNonNull(GraphQLBoolean)
    },
    isDm: {
      type: GraphQLNonNull(GraphQLBoolean)
    },
    memberIds: {
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(GraphQLID)))
    }
  }
});
