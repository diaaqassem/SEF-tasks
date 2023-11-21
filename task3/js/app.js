const forecast = require("../data/forecast"); //just forecast
const geocode = require("../data/geocode");
//take country name from user through terminal
const country = process.argv[2];
geocode(country, (error, data) => {
  console.log("ERROR: ", error);
  console.log("DATA: ", data);

  //check data is not undifiened
  if (data) {
    console.log(`🔅 weather in ${country} 💨`);
    forecast(data.latitude, data.longtitude, (error, data) => {
      console.log("ERROR: ", error);
      console.log("DATA: ", data);
    });
  } else {
    console.log("data entered have an error!!");
  }
});
