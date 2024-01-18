import { CheckBox } from "@mui/icons-material";
import "./authen.scss";
import Register from "./Register";
import { useState } from "react";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"; // openEye
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"; //closeEye

const Authen = () => {
  const [open, setOpen] = useState(false);

  const handleRegis = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  return (
    <div className="authen">
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>davbook</h1>
            <p>
              Davbook helps you connect and share with the people in your life.
            </p>
          </div>
          <div className="right">
            <div className="wrapper">
              <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Log in</button>
                <a href="home">Forgotten password?</a>
                <hr />
                <button onClick={handleRegis} class="btn-regis">
                  Create new account
                </button>
              </form>
            </div>
            <p>
              <strong>Create a Page</strong> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
      {open && <Register setOpen={setOpen} />}
    </div>
  );
};

export default Authen;
