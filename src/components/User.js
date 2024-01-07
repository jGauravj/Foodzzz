import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      UserInfo: {
      
      }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/jGauravj");
    const json = await data.json();

    this.setState({
      UserInfo: json,
    })

    console.log(json);
  }

  render() {

    const {name, location} = this.state.UserInfo;

    return (
      <div>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}
export default User;
