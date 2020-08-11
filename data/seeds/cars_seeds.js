
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: "1GNDT13W3W2249640",
          make: "Blazer",
          model: "1998 Chevrolet",
          mileage: 900.54,
          transmition: "manual"
      },
      {
        vin: "11FVACYDC37HW59012",
        make: "M2",
        model: "2007 Freightliner",
        mileage: 450.54,
        transmition: "manual"
      },
      {
        vin: "KM8SC73E94U774838",
        make: "Santa Fe",
        model: "2004 Hyundai",
        mileage: 4503.5,
        transmition: "automatic",
        status: "salvage"
      },
      {
        vin: "JH4KA3160LC017215",
        make: "Legend",
        model: "1990 Acura",
        mileage: 200.99,
        transmition: "automatic",
        status: "clean"
      },
      ]);
    });
};
