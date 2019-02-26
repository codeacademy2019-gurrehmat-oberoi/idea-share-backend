const models = require('../../models');

module.exports = {
  method: 'POST',
  path: '/idea',
  handler: async (request) => {
    const { payload } = request;
    const result = await models.Idea.addIdea(payload);
    return result;
  },
};
