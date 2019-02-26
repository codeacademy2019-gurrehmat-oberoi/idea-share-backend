const ping = require('./ping.route');
const getIdeas = require('./getIdeas.route');
const postIdea = require('./postIdea.route');

module.exports = [].concat(
  ping,
  getIdeas,
  postIdea,
);
