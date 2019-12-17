'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('movies', {
      id: { type: Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true,
      },
      title: { type: Sequelize.STRING, },
      director: {type: Sequelize.STRING,},
      releaseDate: { type: Sequelize.STRING, },
      rating: { type: Sequelize.STRING, },
      runTime: { type: Sequelize.INTEGER, },
      genre:{type: Sequelize.STRING},
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },  
      deletedAt: { type: Sequelize.DATE },
    })
    
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('movies')
  }
};