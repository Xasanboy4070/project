import { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";

class Login extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <div className="inputs">
            <input
              className="passwordInput"
              type="password"
              placeholder="Parol"
            />
            <button className="add">Add</button>
          </div>
          <Link to="/">
            <button className="back">
              <ion-icon name="arrow-back-outline"></ion-icon>back
            </button>
          </Link>
        </div>
      </>
    );
  }
}

export default Login;
