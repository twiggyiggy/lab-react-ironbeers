import React, {Component} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar';

class Beers extends Component {
  
  state = {
    beers: [],
  }
  
  componentDidMount() {
    axios.get('https://ih-beer-api.herokuapp.com/beers')
    
    .then((response) => {
      const beersFromAPI = response.data.splice(0,50)
      // console.log(beersFromAPI)
      this.setState({
        beers: beersFromAPI,
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  render() {
    return (
      <>
        <Navbar />
        <h2>All Beers Page</h2>
        <section className='container'>
          {this.state.beers.length > 0 ? this.state.beers.map((beer, index) => {
            return(
              <article className='beer-card' key={index}>
                <img src={beer.image_url} alt="craft beer"/>
                <a href={`/beers/${beer._id}`}><h3>{beer.name}</h3></a>
                <h3>{beer.tagline}</h3>
                <p><strong>Created by: </strong>{beer.contributed_by}</p>
              </article>
            )
          }) : <p>Loading...</p>}
        </section>
      </>
    )

  }
}

export default Beers
