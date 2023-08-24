'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FlashCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      FlashCard.belongsTo(models.User, { foreignKey: 'userId'} )
    }
  }
  FlashCard.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    answer:{
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'FlashCard',
  });
  return FlashCard;
};