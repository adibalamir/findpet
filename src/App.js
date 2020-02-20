import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import { increment } from './actions/increment';
import { decrement } from './actions/decrement';
import { fillPets } from './actions/fillPets'
import axios from 'axios';

import './App.css';

let accessToken = '';
export const allowCORS = 'https://cors-anywhere.herokuapp.com/';

const mapStateToProps = state => ({
    ...state
})
const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction()),
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    fillPets: (access_token, type) => dispatch(fillPets(access_token, type))
})

// function getAnimals(access_token, type) {
//     axios({
//       url: `${allowCORS}https://api.petfinder.com/v2/animals?${type}`,
//       headers: {
//         'Authorization': 'Bearer '+access_token
//       },
//       method: 'get'
//     })
//     .then(response => {
//       return response.data;
//     })
// }

class App extends Component {
    componentDidMount() {
        axios({
            url: `${allowCORS}https://api.petfinder.com/v2/oauth2/token`,
            method: 'post',
            data: {
              'grant_type': 'client_credentials',
              'client_id': 'oNgWr24bnzhY3dkExVSUYNzDARJTelqUkby6gMXDpltvGkMG3y',
              'client_secret': '7x104OfG5jE2nojVutKvFtuCAxm5wnSVrLb3rLJS'
            }
          })
          .then(response => {
            accessToken = response.data.access_token;
            console.log(accessToken);
          }) 
          .catch(err => {
              console.log(err);
          });
    }

    simpleAction = (event) => {
        this.props.simpleAction();
    }
    increment = (event) => {
        this.props.increment()
    }
    decrement = (event) => {
        this.props.decrement()
    }
    fillPets = (access_token, type) => {
        this.props.fillPets(access_token, type)
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.simpleAction}>Test redux action</button>
        
                <pre>{
                    JSON.stringify(this.props)
                }
                </pre>
                
                <button onClick={this.increment}>+</button>
                <p>{this.props.counterReducer.counter}</p>
                <button onClick={this.decrement}>-</button>
                
                <div>
                <button onClick={() => this.fillPets(accessToken, 'cat')}>Fill Pets!</button>
                </div>
            </div>
          );
    }
  
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
