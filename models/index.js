const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false,
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status: Sequelize.ENUM('open', 'closed'),
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

module.exports = {
  db,
  Page,
  User,
};
