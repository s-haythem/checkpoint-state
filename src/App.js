import React from "react";
import Profile from "./Profile";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: "Smirani Haythem ",
        bio: "Hey, what's up ?",
        imgSrc: "./avatar.jpg",
        profession: "Student",
      },
      show: false,
      digit: 0,
    };
  }

  showFunction() {
    this.setState({
      show: !this.state.show,
    });
  }

  componentDidMount = () => {
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({
        digit: prevState.digit + 1,
      }));
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.myInterval);
  };

  render() {
    return (
      <div className="App">
        <button
          style={{ marginTop: "20px" }}
          onClick={() => {
            this.showFunction();
          }}
        >
          {this.state.show === true ? "Hide Profile" : "Show Profile"}
        </button>

        <div>
          {this.state.show === true ? (
            <div>
              <span> {this.state.digit} </span>
              <Profile
                fullName={this.state.Person.fullName}
                bio={this.state.Person.bio}
                img={this.state.Person.imgSrc}
                profession={this.state.Person.profession}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
