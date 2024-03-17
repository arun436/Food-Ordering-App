import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Compoment</h1>
        <UserClass name={"First "} location={"Hyderabad"} />
        <div>Hello</div>
      </div>
    );
  }
}

export default About;
