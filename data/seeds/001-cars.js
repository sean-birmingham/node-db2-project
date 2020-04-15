exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          'VIN': '2HGFC2F51JH583547',
          'make': 'Honda',
          'model': 'Civic',
          'mileage': 46554,
          'transmission type': 'variable',
          'status': 'clean',
        },
        {
          'VIN': '4T4BF1FK2FR458275',
          'make': 'Toyota',
          'model': 'Camry',
          'mileage': 32300,
          'transmission type': null,
          'status': null,
        },
      ]);
    });
};
