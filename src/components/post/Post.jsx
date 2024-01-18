import { Link } from "react-router-dom";
import "./post.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import ReplyIcon from "@mui/icons-material/Reply";
const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link style={{ textDecoration: "none", color: "inherit" }}>
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">4 hours ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc} </p>
          <img src={post.img} alt="" />
        </div>
        <div className="infor">
          <div className="item">
            <FavoriteBorderIcon /> 1k Likes
          </div>
          <div className="item">
            <CommentIcon /> 1.2k Comments
          </div>
          <div className="item">
            <ReplyIcon /> Shares
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
