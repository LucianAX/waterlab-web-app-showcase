// Server GET Request - General
fetch('https://GETendpoint')
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
      //Code to execute
    });

// Server GET Request - Units (understood as devices)
fetch('https://GETendpoint')
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
      //Code to execute
      // const Units = jsonResponse; //array of Unit objects
    });

// Server GET Request - Measurements
fetch('https://GETendpoint')
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
      //Code to execute
      // const Measurements = jsonResponse; //array of measurement objects
    });

// Server GET Request - Sensors
fetch('https://GETendpoint')
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
      // Code to execute
      // const Sensors = jsonResponse; //Array of sensor objects
    });


//Mock Data
const Units = [
  {
    Id: '0007',
    Name: 'PoC Device',
    LocLat: 'alfa latitude',
    LocLong: 'alfa longitude',
    DateCreated: '10.11.2020',
    Owner_id: '1',
    DateRegistered: '10.11.2020',
    Active: 'YES',
  },
  {
    Id: '7373',
    Name: 'Test Well Vejen',
    LocLat: 'beta latitude',
    LocLong: 'beta longitude',
    DateCreated: '11.11.2020',
    Owner_id: '1',
    DateRegistered: '11.11.2020',
    Active: 'YES',
  },
  {
    Id: '6400',
    Name: 'Mock Device Sonderbronx',
    LocLat: 'theta latitude',
    LocLong: 'theta longitude',
    DateCreated: '11.11.2020',
    Owner_id: '1',
    DateRegistered: '11.11.2020',
    Active: 'NO',
  },
]

const Measurements = [
  {
    MeasurementId: '123',
    TempC: 15.5,
    Ph: 9.0,
    TimeCreated: '18:00 15.01.2021',
    Unit_Id: '-', //is it unit of measurement or unit as in device?
    Conductivity: 20,
  },
  {
    MeasurementId: '923',
    TempC: 12.0,
    Ph: 7.5,
    TimeCreated: '15:00 12.01.2021',
    Unit_Id: 'S/m',
    Conductivity: 40,
  },
  {
    MeasurementId: '749',
    TempC: 16.5,
    Ph: 8.0,
    TimeCreated: '20:00 18.01.2021',
    Unit_Id: 'C',
    Conductivity: 20,
  },
]

const Sensors = [
  {
    Id: 'xyz',
    Manufacturer: 'Chinese company no. 10000000',
    Model: 'PH sensor',
    DateCreated: '01.11.2020',
    Unit_Id: '0007', //is it the unit's (device) ID ?
  },
  {
    Id: 'twk',
    Manufacturer: 'Chinese company no. 4000000',
    Model: 'Conductivity sensor',
    DateCreated: '03.11.2020',
    Unit_Id: '7373', //is it the unit's (device) ID ?
  },
  {
    Id: 'zyx',
    Manufacturer: 'Chinese company no. 8000000',
    Model: 'Temperature sensor - Thermistor',
    DateCreated: '05.11.2020',
    Unit_Id: '6400', //is it the unit's (device) ID ?
  },
]


export { Units, Sensors, Measurements };