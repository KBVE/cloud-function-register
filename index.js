const axios = require("axios").default;
const sdk = require("node-appwrite");


module.exports = async function (req, res) {
  //? CORE
  let payload = "";
  let client = new sdk.Client();

  const errorHandler = (__errorMessage, statusCode = 418) => {
    //TODO Error Handler Grafana.
    res.json({ data: "error", message: __errorMessage }, statusCode);
  };

  const validHandler = (_data) => {
    //TODO Valid Handler Grafana.
    res.json({ data: _data }, 200)
  }

  //* Variables
  let username = "";
  let name = "";
  let email = "";
  let password = "";
  let captcha = "";
  let _SECRET_API_KEY = "";
  let _SECRET_CAPTCHA_KEY = "";

  if (req.payload) {
    try {
      payload = JSON.parse(req.payload);
    } catch (error) {
        errorHandler("Corrupt payload for the function.");
    }
  } else {
    errorHandler("Missing payload for the function.");
  }

  const response = await axios.get(
    //! CAPTCHA CHECK
    `${question}`
  );

  if (response.status !== 200) {
    throw new Error(`Status code: ${response.status}, Data: ${response.data}`);
  }

  const dataJson = response.data;
  let _result = dataJson;
  try {
    _result = JSON.parse(_result).choices[0].message.content;
  } catch (error) {}

  res.json({
    message: _result,
  });
};
