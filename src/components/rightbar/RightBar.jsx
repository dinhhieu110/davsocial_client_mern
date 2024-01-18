import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="./assets/Elly.jpg" alt="" />
              <span>
                <strong>Quỳnh Anh</strong>
              </span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyPL_mP32uZDuBc-rTdgMn196rUw39iijTDMOE9FkckxJSDM41v1oxHzeF804GKTNQEI&usqp=CAU"
                alt=""
              />
              <span>
                <strong>Thùy Trang</strong>
              </span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Lastest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="./assets/anhvaem.jpg" alt="" />
              <span>
                <strong>Yên Phương</strong> posted a photo
              </span>
            </div>
            <div className="history">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="./assets/106477705_2713261528957729_8121762042133854256_n.jpg"
                alt=""
              />
              <span>
                <strong>Thùy Trang</strong> liked the comment
              </span>
            </div>
            <div className="history">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./assets/Duong.jpg" alt="" />
              <span>
                <strong>Đình Dương</strong> liked the post
              </span>
            </div>
            <div className="history">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./assets/dad.jpg" alt="" />
              <span>
                <strong>Đình Phước</strong> changed his avatar
              </span>
            </div>
            <div className="history">
              <span>1 min ago</span>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Online friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="./assets/Elly.jpg" alt="" />
              <div className="online"></div>
              <span>
                <strong>Quỳnh Anh</strong>
              </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="./assets/106477705_2713261528957729_8121762042133854256_n.jpg"
                alt=""
              />
              <div className="online"></div>
              <span>
                <strong>Thùy Trang</strong>
              </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="./assets/z4369504201080_598b015171534a8d857f13aa50004c98.jpg"
                alt=""
              />
              <div className="online"></div>
              <span>
                <strong>Đình Hiệu</strong>
              </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/originals/70/b5/ea/70b5ea2cb821846c6c22f5f9d39eadc0.jpg"
                alt=""
              />
              <div className="online"></div>
              <span>
                <strong>Thùy Trang</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
