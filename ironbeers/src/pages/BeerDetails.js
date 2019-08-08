import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

class BeerDetails extends Component {

  state = {
    beer: null
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    axios.get(`https://ih-beer-api.herokuapp.com/beers/${beer.id}`)
    .then((response) => {
      console.log(response) // ???
      // this.setState({
      //   beer: response.
      // })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <>
        <Navbar />
        <h2>Beer Details Page</h2>
      </>
    )
  }

}

export default BeerDetails;
