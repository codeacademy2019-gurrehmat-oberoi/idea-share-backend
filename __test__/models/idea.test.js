const models = require('../../models');

describe('addIdea', () => {
  beforeAll(async () => {
    await models.Idea.truncate();
  });
  afterEach(async () => {
    await models.Idea.truncate();
  });
  it('should add an idea to DB', async () => {
    const idea = {
      title: 'Test Idea',
      author: 'Lorem Ipsum',
      message: 'World is\nAbout to\nEnd',
    };
    await models.Idea.addIdea(idea);
    expect(await models.Idea.count()).toEqual(1);
  });
  it('should add idea which is passed', async () => {
    const idea = {
      title: 'Test Idea',
      author: 'Lorem Ipsum',
      message: 'World is\nAbout to\nEnd',
    };
    await models.Idea.addIdea(idea);
    const result = await models.Idea.findOne();
    expect(result.dataValues).toMatchObject(idea);
    // expect(await models.Idea.find())
  });
});

describe('getAllIdeas', () => {
  it('should return all data', async () => {
    const idea1 = {
      title: 'Test Idea 1',
      author: 'Lorem Ipsum',
      message: 'World is\nAbout to\nEnd',
    };
    await models.Idea.addIdea(idea1);
    const idea2 = {
      title: 'Test Idea 2',
      author: 'Lorem Ipsum',
      message: 'World is\nnot \nAbout to\nEnd',
    };
    await models.Idea.addIdea(idea2);
    expect(await models.Idea.getAllIdeas()).toEqual([idea1, idea2]);
  });
});
