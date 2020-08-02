const request = require("request");

const forecast = (latitude, longtitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=c41d9e94d03f9473b0fb165f285294df&query=" +
    latitude +
    "," +
    longtitude +
    "&units=m";
  

  request({ url: url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (body.error) {
      callback("Unable to find location!");
    } else {
      callback(undefined, 
          body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees out.",
      );
    }
  });
};

module.exports = forecast;
