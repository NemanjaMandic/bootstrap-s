import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<
{ message: string},
{count: number}
>{

  constructor(props){
    super(props);

    this.state = {
      count: 0
    }
  }
  render(){
    return(
      <div onClick={ this.increment }>{this.props.message} { this.state.count }</div>
    )
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}

ReactDOM.render(
  <App message="Zdravo tamp" />,
  document.getElementById("root")
);
