'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Notes', [
      {
      userId: '1',
      data: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque reiciendis ipsam neque et deleniti aspernatur facilis sapiente quidem. Soluta error ad nostrum, placeat explicabo debitis aliquid itaque voluptatibus adipisci reprehenderit voluptatem ducimus consectetur animi incidunt fuga non amet doloribus iste qui nihil mollitia! Ducimus, accusantium molestiae cupiditate tempore quod, distinctio in at possimus cumque tempora, quasi explicabo. Debitis minus earum velit reiciendis facere tempore sapiente omnis. Laudantium quia, et perspiciatis soluta ad exercitationem inventore vel iusto iste dolore minus quidem neque, commodi voluptate sapiente vitae fugiat! Consequuntur, eius debitis! Voluptatem, nulla! Nemo in rerum quibusdam magni. Obcaecati, molestias quae?'
      },
      {
      userId: '2',
      data: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque reiciendis ipsam neque et deleniti aspernatur facilis sapiente quidem. Soluta error ad nostrum, placeat explicabo debitis aliquid itaque voluptatibus adipisci reprehenderit voluptatem ducimus consectetur animi incidunt fuga non amet doloribus iste qui nihil mollitia! Ducimus, accusantium molestiae cupiditate tempore quod, distinctio in at possimus cumque tempora, quasi explicabo. Debitis minus earum velit reiciendis facere tempore sapiente omnis. Laudantium quia, et perspiciatis soluta ad exercitationem inventore vel iusto iste dolore minus quidem neque, commodi voluptate sapiente vitae fugiat! Consequuntur, eius debitis! Voluptatem, nulla! Nemo in rerum quibusdam magni. Obcaecati, molestias quae?'
      },
      {
      userId: '3',
      data: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque reiciendis ipsam neque et deleniti aspernatur facilis sapiente quidem. Soluta error ad nostrum, placeat explicabo debitis aliquid itaque voluptatibus adipisci reprehenderit voluptatem ducimus consectetur animi incidunt fuga non amet doloribus iste qui nihil mollitia! Ducimus, accusantium molestiae cupiditate tempore quod, distinctio in at possimus cumque tempora, quasi explicabo. Debitis minus earum velit reiciendis facere tempore sapiente omnis. Laudantium quia, et perspiciatis soluta ad exercitationem inventore vel iusto iste dolore minus quidem neque, commodi voluptate sapiente vitae fugiat! Consequuntur, eius debitis! Voluptatem, nulla! Nemo in rerum quibusdam magni. Obcaecati, molestias quae?'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notes', null, {});
  }
};
