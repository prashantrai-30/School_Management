'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const timestamp = new Date();
    
    await queryInterface.bulkInsert('Schools', [
      {
        name: 'Green Valley High School',
        address: '123 Main Street, Springfield',
        latitude: 37.7749,
        longitude: -122.4194,
        createdAt: timestamp,
        updatedAt: timestamp
      },
      {
        name: 'Riverside Public School',
        address: '456 River Rd, Lakeside',
        latitude: 34.0522,
        longitude: -118.2437,
        createdAt: timestamp,
        updatedAt: timestamp
      },
      {
        name: 'Mountain View Academy',
        address: '789 Hilltop Ave, Boulder',
        latitude: 39.7392,
        longitude: -104.9903,
        createdAt: timestamp,
        updatedAt: timestamp
      },
      {
        name: 'Sunrise Elementary',
        address: '101 Sunrise Blvd, Phoenix',
        latitude: 33.4484,
        longitude: -112.0740,
        createdAt: timestamp,
        updatedAt: timestamp
      },
      {
        name: 'Ocean Breeze High',
        address: '202 Seaside Lane, Miami',
        latitude: 25.7617,
        longitude: -80.1918,
        createdAt: timestamp,
        updatedAt: timestamp
      },
      {
        name: 'Cedar Grove School',
        address: '303 Forest Way, Denver',
        latitude: 39.7392,
        longitude: -104.9903,
        createdAt: timestamp,
        updatedAt: timestamp
      },
      {
        name: 'Harmony Hills School',
        address: '404 Harmony Rd, Austin',
        latitude: 30.2672,
        longitude: -97.7431,
        createdAt: timestamp,
        updatedAt: timestamp
      },
      {
        name: 'Skyline High School',
        address: '505 Skyline Dr, Seattle',
        latitude: 47.6062,
        longitude: -122.3321,
        createdAt: timestamp,
        updatedAt: timestamp
      },
      {
        name: 'Prairie View Elementary',
        address: '606 Prairie Ln, Dallas',
        latitude: 32.7767,
        longitude: -96.7970,
        createdAt: timestamp,
        updatedAt: timestamp
      },
      {
        name: 'Lakeside International School',
        address: '707 Lake Rd, Orlando',
        latitude: 28.5383,
        longitude: -81.3792,
        createdAt: timestamp,
        updatedAt: timestamp
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Schools', null, {});
  }
};
