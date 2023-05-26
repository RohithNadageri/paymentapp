import { Outlet, Link } from "react-router-dom";
import Logo from "../../asset/images/logo-no-background.png";
import { useSelector } from "react-redux";
import SendIcon from "@mui/icons-material/Send";
import { Avatar } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { deepPurple } from "@mui/material/colors";
function Headermain() {
  const user = useSelector((state) => state.loggedInUser);
  console.log(user);
  // console.log(user !== null ? user.name.indexOf(" ") >= 0 : false);
  let userName = user !== null ? user.name : "";
  const date = new Date();
  const hours = date.getHours();
  let greeting;
  if (hours < 12) {
    greeting = "Good morning";
  } else if (hours < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  userName = greeting + " : " + userName;
  function stringToColor(string) {
    let hash = 0;
    let i;
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
    return color;
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <>
      <nav class="navbar bg-body-tertiary pt-3 ">
        <div class="container">
          <Link to="/">
            <a class="navbar-brand">
              <img src={Logo} class="logoimg" width="90" height="60" />
            </a>
          </Link>
          <div className="d-flex align-items-baseline " role="search">
            {user !== null ? (
              <>
                <div className=" navbar_name">
                  {/* <span>{user !== null ? text : ""}</span> */}
                  <Typewriter
                    words={[userName]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                  // delaySpeed={1000}
                  // onLoopDone={handleDone}
                  // onType={handleType}
                  />
                </div>
                <Link to = "/sendMoney">
                  <button class="btn1 btn-gradient1 btn-glow1">
                    Send <SendIcon className="mb-1" />
                  </button>
                </Link>
                <Link className="text-decoration-none" to="/profile">
                  {/* *<p className="profile_btn">Profile</p> */}
                  {user !== null ? (
                    <Avatar
                      {...stringAvatar(user.name)}
                      className="userAvatar"
                    />
                  ) : (
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                  )}
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-sm text-light">
                  <a class="btn btn-primary navbuttons">Login</a>
                </Link>
                <Link to="/registration" className="btn btn-sm text-light">
                  <a class="btn btn-outline-primary">Sign In</a>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
export default Headermain;