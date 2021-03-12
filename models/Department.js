const { Model, DataTypes } = require('sequelize');
const {sequelize} = require('../config/connection');

class Department extends Model {}

Department.init(
  {
    dept_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    dept_name: {
      type: DataTypes.STRING,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'department',
  }
);

module.exports = Department;
