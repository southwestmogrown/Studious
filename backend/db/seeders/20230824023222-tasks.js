'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Tasks', [
    {
    userId: '1',
    task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    completed: false
    },
    {
    userId: '2',
    task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    completed: false
    },
    {
    userId: '3',
    task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    completed: false
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
