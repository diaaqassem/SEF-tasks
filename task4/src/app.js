const express = require("express"); // express package
const app = express();
const path = require("path"); // call path package
const hbs = require("hbs"); // call hbs package
// liten port
const port = process.env.PORT || 3000;

const publicDir = path.join(__dirname, "../public");
app.use("/", express.static(publicDir));

app.set("view engine", "hbs"); // configure hbs
//handle hbs file from views
const viewsDir = path.join(__dirname, "../template/views");
app.set("views", viewsDir);

//handle hbs file from partials
const partialsDir = path.join(__dirname, "../template/partials");
hbs.registerPartials(partialsDir);

app.get("/", (req, res) => {
  // to show in hbs page
  res.render("index", {
    title: "HOME",
    desc: "Welcome To Home Page",
  });
});

const geocode = require("../data/geocode");
const forecast = require("../data/forecast");
let data = () => {
  app.get("/weather", (req, res) => {
    console.log(req.query); // print url query
    console.log(req.query.address); // print url address
    if (!req.query.address) {
      res.render("weather", {
        title: "weather",
        desc: "Welcome To weather Page",
        finalData: "you must enter address",
      });
    } else {
      geocode(req.query.address, (error, data) => {
        if (error) {
          // handle any error from geocode
          res.render("weather", {
            title: "weather",
            desc: "Welcome To weather Page",
            finalData: error,
          });
        } else {
          forecast(data.latitude, data.longtitude, (error, forecastData) => {
            if (error) {
              // handle any   error from forecast
              res.render("weather", {
                title: "weather",
                desc: "Welcome To weather Page",
                finalData: error,
              });
            } else {
              res.render("weather", {
                title: "weather",
                desc: "Welcome To weather Page",
                locationA: req.query.address,
                finalData: forecastData,
                latitude: `latitiude : ${data.latitude}`,
                longtitude: `longtitude : ${data.longtitude}`,
              });
            }
          });
        }
      });
    }

    //   console.log(req.query.forecast); // print url forecast
  });
};
data();
app.get("*", (req, res) => {
  // when page not foud or route not found
  res.send(
    "<h1 style='color:red;'><center>Page Not Found</center></h1><h2><center>Try Again</center</h2>"
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = data;
