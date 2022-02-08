import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
class App extends React.Component {

  constructor(props) {
    super(props);

    // THIS IS ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // We called setState !!
        this.setState({ lat: position.coords.latitude });

        // We didn't not!!
        // this.state.lat = position.coords.latitude
      },

      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidMount() {

  }
  // React says we have to define render() !!!
  render() {
    // calls 2 times while JS loading.
    console.log(Math.random());

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
