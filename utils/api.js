const axios = require('axios');

const api = {
  async getUser(userEntries) {
    try {
      let response = await axios.get(
        `https://api.github.com/users/${userEntries.username}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = api;
