module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post", // posts -> model 이름이 자동으로 소문자, 복수가 되어 MySQL 에는 posts 라는 테이블이 생성된다.
    {
      // id가 기본적으로 들어간다. (MySQL에서 생성)
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 한글+이모티콘 저장하는 방법
    }
  );

  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
    db.Post.hasMany(db.Comment); // post.addComments, post.getComments
    db.Post.hasMany(db.Image); // post.addImages, post.getImages
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }) // post.addLikers, post.removeLikers
  };

  return Post;
};
