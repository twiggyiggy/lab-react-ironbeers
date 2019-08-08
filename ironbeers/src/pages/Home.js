import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <section>
        <img src='images/Screenshot 2019-08-08 at 18.55.12.png' alt="beers"/>
        <Link to='/beers'>
          <h2>All beers</h2>
        </Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id feuginunc. Vestibulum dapibus id risus at convallis. Nam posuere quam in nibh blandit interdum. Quisque ac dictum mi.</p>
      </section>
      <section>
          <img src='images/Screenshot 2019-08-08 at 18.55.58.png' alt="beers"/>
          <Link to='/random-beer'>
            <h2>Random Beer</h2>
          </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id feuginunc. Vestibulum dapibus id risus at convallis. Nam posuere quam in nibh blandit interdum. Quisque ac dictum mi.</p>
      </section>
      <section>
          <img src='images/Screenshot 2019-08-08 at 18.55.51.png' alt="beers"/>
          <Link to='/new-beer'>
            <h2>New Beer</h2>
          </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id feuginunc. Vestibulum dapibus id risus at convallis. Nam posuere quam in nibh blandit interdum. Quisque ac dictum mi.</p>
      </section>
    </div>
  )
}

export default Home
