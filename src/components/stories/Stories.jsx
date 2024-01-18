import "./stories.scss";
//TEMPORARY
const stories = [
  {
    id: 1,
    name: "Đình Dương",
    img: "./assets/Duong.jpg",
  },
  {
    id: 2,
    name: "Elly Trần",
    img: "./assets/106477705_2713261528957729_8121762042133854256_n.jpg",
  },
  {
    id: 3,
    name: "Bối Béo",
    img: "./assets/anhvaem.jpg",
  },
  {
    id: 4,
    name: "Quỳnh Anh",
    img: "./assets/Elly.jpg",
  },
];
const Stories = () => {
  return (
    <div className="stories">
      <div className="story">
        <img src="./assets/david.jpg" alt="" />
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div key={story.id} className="story">
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
