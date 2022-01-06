const { DataTypes, Model } = require('sequelize');
const sequelize = require('../util/SequelizeManager');

class State extends Model {
  // any wanted custom functionality can go in here.
}

// This function creates the actual model definition.
State.init({
  // Model attributes are defined here
  // No need to include id for the model. That is included automatically!
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pop: {
    type: DataTypes.INTEGER
  },
  growth: {
    type: DataTypes.FLOAT
  },
  pop2018: {
    type: DataTypes.INTEGER
  },
  pop2010: {
    type: DataTypes.INTEGER
  },
  growthSince2010: {
    type: DataTypes.FLOAT
  },
  percent: {
    type: DataTypes.FLOAT
  },
  density: {
    type: DataTypes.FLOAT
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'State', // We need to choose the model name
});

module.exports = State;
