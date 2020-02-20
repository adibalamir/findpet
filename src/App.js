import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fillPets } from './actions/fillPets'
import axios from 'axios';

import { env } from './config'
import './App.css';
import Button from '@material-ui/core/Button';

let accessToken = '';
const allowCORS = 'https://cors-anywhere.herokuapp.com/';

const mapStateToProps = state => ({
    ...state
})
const mapDispatchToProps = dispatch => ({
    fillPets: (access_token, type) => dispatch(fillPets(access_token, type))
})

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
                <Button onClick={() => this.fillPets(accessToken, 'cat')} variant="contained" color="primary">
                    SEARCH
                </Button>
            </div>
          );
    }
  
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
