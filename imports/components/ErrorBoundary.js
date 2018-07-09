import React from 'react';



export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null,
    };
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
    this.setState({error: error});
    this.setState({info: info});


      console.log('Logging the error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
        <h1>Something went wrong!</h1>
         <p>{this.state.error.toString()}</p>
         <p>{JSON.stringify(this.state.info)}</p>
       </div>
      );
    }
    return this.props.children;
  }
}
