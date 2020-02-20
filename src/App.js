import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fillPets } from './actions/fillPets'
import axios from 'axios';

import { env } from './config'
import './App.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';

let accessToken = '';
const allowCORS = 'https://cors-anywhere.herokuapp.com/';

const mapStateToProps = state => ({
    ...state
})
const mapDispatchToProps = dispatch => ({
    fillPets: (access_token, type) => dispatch(fillPets(access_token, type))
})

let imgStyle = {
    height: '100px',
    width: '100px'
}

class App extends Component {
    componentDidMount() {
        axios({
            url: `${allowCORS}https://api.petfinder.com/v2/oauth2/token`,
            method: 'post',
            data: {
              'grant_type': 'client_credentials',
              'client_id': env.client_id,
              'client_secret': env.client_secret
            }
          })
          .then(response => {
            accessToken = response.data.access_token;
          }) 
          .catch(err => {
              console.log(err);
          });
    }

    fillPets = (access_token, type) => {
        this.props.fillPets(access_token, type)
    }

    render() {
        return (
            <div className="App">
                <h1>findpet</h1>
                <Button onClick={() => this.fillPets(accessToken, 'dog')} variant="contained" color="primary">
                    SEARCH
                </Button>
                <p className='text-center'>Click to find your purrfect pet.</p>
                <div className='flex'>
                    {
                        this.props.petReducer.pets[0] !== undefined ? this.props.petReducer.pets[0].map(pet => 
                        <div><p key={pet.id.toString()}>{pet.name}</p><img key={pet.id.toString()} src={pet.photos[0] !== undefined ? pet.photos[0].large : 'https://via.placeholder.com/100'} style={imgStyle}/></div>) : <p></p>
                    }
                </div>
            </div>
          );
    }
  
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
