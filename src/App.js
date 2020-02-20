import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { env } from './config';

//actions
import { fillPets } from './actions/fillPets';
import { changeType } from './actions/changeType';

//Components
import PetContainer from './Components/PetContainer';
import SearchContainer from './Components/SearchContainer';

import './App.css';
import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';

let accessToken = '';
const allowCORS = 'https://cors-anywhere.herokuapp.com/';

const mapStateToProps = state => ({
    ...state
})
const mapDispatchToProps = dispatch => ({
    fillPets: (access_token, type) => dispatch(fillPets(access_token, type)),
    changeType: (type) => dispatch(changeType(type))
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
              console.log(accessToken);
            accessToken = response.data.access_token;
          }) 
          .catch(err => {
              console.log(err);
          });
    }

    fillPets = (access_token, type) => {
        this.props.fillPets(access_token, type)
    }

    changeType = (event) => {
        console.log(event.target.value)
        this.props.changeType(event.target.value)
    }

    render() {
        return (
            <div className="App">
                <h1>findpet</h1>
                <SearchContainer changeType={this.changeType} />
                
                <Button onClick={() => this.fillPets(accessToken, this.props.petReducer.searchParams.type)} variant="contained" color="primary">
                    SEARCH
                </Button>
                
                <p className='text-center'>Click to find your purrfect pet.</p>
                <PetContainer pets={this.props.petReducer.pets[0]} />
            </div>
          );
    }
  
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
