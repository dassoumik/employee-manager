const {
  sequelize,
  connected
} = require('./config/connection');
const initial = require('./routes/prompts/initial');

function start() {
  initial();
  return false;
};
try {
  if (connected) {
    start();
  }
} catch (error) {
  console.error('Unable to connect to the database:', error);
}