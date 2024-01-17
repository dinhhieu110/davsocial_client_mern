import "./login.scss";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"; // openEye
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"; //closeEye

const Login = () => {
  return (
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
              <button class="btn-regis">Create new account</button>
            </form>
          </div>
          <p>
            <strong>Create a Page</strong> for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
