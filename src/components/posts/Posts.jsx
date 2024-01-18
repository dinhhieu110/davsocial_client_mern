import Post from "../post/Post";
import "./posts.scss";
//TEMPORARY
const posts = [
  {
    id: 1,
    name: "Đình Dương",
    userId: 1,
    profilePic: "./assets/Duong.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "./assets/family10.jpg",
  },
  {
    id: 2,
    name: "Đình Hiệu",
    userId: 2,
    profilePic: "./assets/david.jpg",
    desc: "I love you three thousand <3",
    img: "./assets/anhvaem.jpg",
  },
];
const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
