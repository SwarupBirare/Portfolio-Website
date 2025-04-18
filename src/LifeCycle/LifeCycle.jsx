import React from "react";
class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrument: "Guitar",
    };
  }
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Befoer Update : " + prevState.instrument);

    return null;
  }
  componentDidUpdate() {
    console.log("Update Value : " + this.state.instrument);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ instrument: "Drums" });
    }, 3000);
  }
  render() {
    return (
      <div id="lifecycle">
        <h1>I Know How to Play the {this.state.instrument}</h1>
      </div>
    );
  }
}
export default LifeCycle;   