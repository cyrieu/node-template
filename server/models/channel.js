export default (sequelize, DataTypes) => {
  const Channel = sequelize.define("channel", {
    name: DataTypes.STRING,
    isPublic: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    isDm: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Channel.associate = models => {
    Channel.belongsToMany(models.User, {
      through: "channel_member",
      foreignKey: {
        name: "channelId",
        field: "channel_id"
      }
    });
  };

  return Channel;
};
