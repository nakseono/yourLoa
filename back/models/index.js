const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development'; // 배포할 때에는 production으로 바뀌고, 개발할때에만 development
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config); // mysql의 db에 연결해주는 과정. 이후에는 테이블(model)을 만들어야 하므로, 아래의 코드가 나온다.

db.Comment = require('./comment')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);

Object.keys(db).forEach(modelName => { // 반복문 돌면서 각 테이블간의 associate를 실행시켜줌.
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;