import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://en.wikipedia.org/wiki/Hot_dog#/media/File:Hotdog_-_Evan_Swigart.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Hot Dawg Team 1</h1>

            <hr/>

          <p> Chicago-style | Dodger Dog | Corn dogs | Ham Dogs </p>

      
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
