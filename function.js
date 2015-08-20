var data = [
   {
    "year": 2015,
    "color": "#7F7758", 
    "values": [
      {
        "province": "BC",
        "seats": 42
      },
      {
        "province": "AB",
        "seats": 34
      },
      {
        "province": "SK",
        "seats": 14
      },
      {
        "province": "MB",
        "seats": 14
      },
      {
        "province": "ON",
        "seats": 121
      },
      {
        "province": "QC",
        "seats": 78
      },
      {
        "province": "NB",
        "seats": 10
      },
      {
        "province":"NS",
        "seats": 11
      },
      {
        "province": "PE",
        "seats": 4
      },
      {
        "province": "NL",
        "seats": 7
      },
      {
        "province": "YT",
        "seats": 1
      },
      {
        "province": "NT",
        "seats": 1
      },
      {
        "province": "NU",
        "seats": 1
      }
    ]
  },
 {      
    "year": 2014,
    "color": "#BFBFBF",
    "values": [
      {
        "province": "BC",
        "seats": 36
      },
      {
        "province": "AB",
        "seats": 28
      },
      {
        "province": "SK",
        "seats": 14
      },
      {
        "province": "MB",
        "seats": 14
      },
      {
        "province": "ON",
        "seats": 106
      },
      {
        "province": "QC",
        "seats": 75
      },
      {
        "province": "NB",
        "seats": 10
      },
      {
        "province":"NS",
        "seats": 11
      },
      {
        "province": "PE",
        "seats": 4
      },
      {
        "province": "NL",
        "seats": 7
      },
      {
        "province": "YT",
        "seats": 1
      },
      {
        "province": "NT",
        "seats": 1
      },
      {
        "province": "NU",
        "seats": 1
      }
    ]
  }
]
    
 
 function transformData(data) {
    return data.map(function (item) {
      var yearElections = {};
      yearElections.year = item.year;
      yearElections.provinces = [];

      Object.keys(item).forEach(function (values) {
        // Skip the year property, as it's not a province
        if (values === "year") {
          return;
        }

        yearElections.provinces.push({
          provinces: "province",
          seats: item[province]
        });
      });

      return yearElections;
    });
  }

  edata = null;

  edata = transformData(data);