// @flow
import Sequelize from "sequelize";

export type Schema = {|
  User: Object,
  Channel: Object,
  db: Object
|};

const db = new Sequelize(process.env.DB_URL);

const models: Schema = {
  User: db.import("./user"),
  Channel: db.import("./channel"),
  db: {}
};

Object.keys(models).forEach(modelName => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.db = db;

export const User = models.User;
export const Channel = models.Channel;

export default models;
