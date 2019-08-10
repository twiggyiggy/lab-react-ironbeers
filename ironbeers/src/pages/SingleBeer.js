import React, {Component} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

export default class SingleBeer extends Component {

    state = {
        beer: {}
    }

    componentDidMount() {
        const {id} = this.props.match.params

        axios.get(`https://ih-beer-api.herokuapp.com/beers/${id}`)
        .then( (response) => {
            this.setState({
                beer: response.data
            })

        })
        .catch((error) => console.log(error))
      }

    render() {
        return (
            <div>
                <Navbar/>
                <img alt='beer' src = {this.state.beer.image_url} width='70px'/>
                <h2>{this.state.beer.name}</h2>
                <h3>{this.state.beer.tagline}</h3>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p>
            </div>
        )
    }
}
