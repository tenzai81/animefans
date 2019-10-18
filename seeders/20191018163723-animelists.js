'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('animelists', 
      [
        {title: 'Boruto', genre: 'Shounen',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Demon Slayer', genre: 'Shounen',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Black Clover', genre: 'Shounen',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Pokemon', genre: 'Adventure',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Yu Gi Oh', genre: 'Shounen',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Dragonball Z', genre: 'Action',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Final Fantasy X', genre: 'Fantasy',createdAt: new Date(), updatedAt: new Date() },
        {title: 'My Hero Academia', genre: 'Shounen',createdAt: new Date(), updatedAt: new Date() },
        {title: 'ASSASSINS PRIDE', genre: 'Action',createdAt: new Date(), updatedAt: new Date() },
        {title: 'High School Prodigies Have It Easy Even In Another World', genre: 'Isekai',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Dr. Stone', genre: 'Action',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Food Wars! Shokugeki no Soma', genre: 'Ecchi',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Radiant', genre: 'Action',createdAt: new Date(), updatedAt: new Date() },
        {title: 'JoJo Bizarre Adventure', genre: 'Action',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Fire Force', genre: 'Supernatural',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Fairy Tail', genre: 'Fantasy',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Ahiru no Sora', genre: 'Sports',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Hunter x Hunter', genre: 'Action',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Gundam Build Divers', genre: 'Mecha',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Legend of the Galactic Heroes: Die Neue These', genre: 'Sci-Fi',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Ascendance of a Bookworm', genre: 'Isekai',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Attack on Titan', genre: 'Action',createdAt: new Date(), updatedAt: new Date() },
        {title: 'Isekai Cheat Magician', genre: 'Fantasy',createdAt: new Date(), updatedAt: new Date() },
        {title: 'The Rising of the Shield Hero', genre: 'Action',createdAt: new Date(), updatedAt: new Date() },

      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('animelists', null, {});
   
  }
};
