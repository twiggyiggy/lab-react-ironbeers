import React, {Component} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'

class Beers extends Component {
  
  state = {
    beers: [],
  }
  
  componentDidMount() {
    axios.get('https://ih-beer-api.herokuapp.com/beers/')
    .then( (response) => {
      // console.log(response.data)
      let beersFromAPI = response.data.splice(0,20)
      this.setState({
        beers: beersFromAPI
      })
    })
    .catch((error) => console.log(error))
  }

  makeBeersList () { 
  }
  
  render() {
    return (
      <>
        <Navbar/>
        <h1>All beers</h1>
        {this.state.beers.map((beer, index) => 
            <article key={index}>
              <Link to={`/beers/${beer._id}`}>
                <img src={beer.image_url} width = '70px' alt='BEER'/>
              </Link>
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <p><strong>Created by: </strong>{beer.contributed_by}</p>
            </article>
        )}
      </>
    )

  }
}

export default Beers
