const models = require('../../models');

module.exports = {
  method: 'GET',
  path: '/ideas',
  handler: (request, h) => models.Idea.getAllIdeas(),
};
