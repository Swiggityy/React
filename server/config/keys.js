if (process.env.NODE_ENV === "production") {
  // we are in production - return the prod set of keys
  module.exports = require("./prod");
} else {
  // we are in development - return the dev keys!!!
  module.exports = require("./dev");
}

//mongodb+srv://Swiggityyy:Happythedog1@cluster0-ulp7x.mongodb.net/test?retryWrites=true&w=majority
//Client ID: 101558036065-ckrf0t5ad7jp537s7ofb9dev7a87eos7.apps.googleusercontent.com
//Client Secret: 9r858hQM9vyVfKzfj7rFGzk2
