const { Model, DataTypes } = require('sequelize');
const {sequelize} = require('../config/connection');

class Role extends Model {}

Role.init(
  {
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    salary: {
      type: DataTypes.INTEGER,
    },
    dept_id: {
      type: DataTypes.INTEGER,
      // foreignkey: true,
      references: {
        model: 'role',
        key: 'role_id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'role',
  }
);

module.exports = Role;
