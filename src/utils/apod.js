const request = require("request");
const apod = (date = undefined, callback) => {
  const key = process.env.API_key;
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=" + key + "&date=" + date;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to the service!", undefined);
    } else if (body.code === 400) {
      callback(body.msg, undefined);
    } else {
      callback(undefined, {
        date: body.date,
        title: body.title,
        explanation: body.explanation,
        image_url: body.url,
      });
    }
  });
};

module.exports = apod;
