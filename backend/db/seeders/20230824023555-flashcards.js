'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('FlashCards', [
    {
    userId: '1',
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
    userId: '2',
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
    userId: '3',
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('FlashCards', null, {});
  }
};
