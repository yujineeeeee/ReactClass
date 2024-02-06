import React from "react";

class LifecycleClass extends React.Component{
  num1;

  constructor(props) {
    super(props);

    this.state = {
      num2: null
    }
  }

  componentDidMount() {
    this.num1 = 100;
    // this.state.num2 = 200;
    this.setState({num2: 2000});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('setState() 실행 후 동작하는 componentDidUpdate()');
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <p>num1: {this.num1}</p>
        {console.log(this.num1)}
        <p>num2: {this.state.num2}</p>
        {console.log(this.state.num2)}
      </div>
    );
  }

}

export default LifecycleClass;