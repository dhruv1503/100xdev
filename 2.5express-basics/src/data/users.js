const users = [
  {
    id : 1,
    name: "Dhruv Aggarwal",
    age: 28,
    address: {
      city: "Pune",
      state: "Maharashtra",
      country: "India",
    },
    organs: [
      {
        name: "kidneys",
        count: 2,
        healthInfo: [
          { name: "right_kidney", healthy: true, damage: 0 },
          { name: "left_kidney", healthy: true, damage: 0.25 },
        ],
      },
    ],
  },
];

module.exports = users
