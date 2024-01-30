const mongoose = require("mongoose")
const url = "mongodb+srv://admin:admin@mohitclustor.vlzg0yv.mongodb.net/taskApp?retryWrites=true&w=majority";

try {
    mongoose.connect(url);
  } catch (error) {
    handleError(error);
  }
