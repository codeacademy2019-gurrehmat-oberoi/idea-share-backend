

module.exports = (sequelize, DataTypes) => {
  const Idea = sequelize.define('Idea', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    message: DataTypes.STRING,
  }, {});
  // Idea.associate = function (models) {
  //   // associations can be defined here
  // };
  Idea.addIdea = ({ title, author, message }) => Idea.findOrCreate({
    where: {
      title,
      author,
      message,
    },
  });

  Idea.getAllIdeas = () => {
    const returnedPromise = Idea.findAll();
    const resultArray = returnedPromise.then().map(row => ({
      title: row.dataValues.title,
      author: row.dataValues.author,
      message: row.dataValues.message,
    }));
    return resultArray;
  };
  return Idea;
};
