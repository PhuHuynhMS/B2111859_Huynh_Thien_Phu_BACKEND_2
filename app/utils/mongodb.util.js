const { MongoClient } = require("mongodb");
const config = require("../config");
class MongoDB {
  static connect = async () => {
    if (this.client) {
      return this.client;
    }
    this.client = await MongoClient.connect(config.db.uri);
    return this.client;
  };
}

module.exports = MongoDB;
