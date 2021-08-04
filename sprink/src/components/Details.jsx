import React from 'react';
import axios from 'axios';
import ItemList from './ItemList'
import './Detail.css'

export default class Details extends React.Component {
    _isMounted=false;
    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
      }

  componentDidMount() {
    this._isMounted = true;
    axios.get(`https://jsonblob.com/api/4e6e6a57-eb72-11eb-9eff-b5f91494da60`)
    .then(dataa =>{
        console.log(dataa.data.categorys)
        this.setState({
            data : dataa.data.categorys
        })
    })
    .catch(err=>console.log(err))
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  openDetail=()=>{
    document.getElementById('welcome').style.display='block';
    document.getElementById('listDetails').style.display='none';
  }
  openList=()=>{
    document.getElementById('menu-items').style.display='block';
    document.getElementById('listDetails').style.display='none';
  <ItemList/>}

  render() {
    
    return (
      <div id="listDetails">
        <button onClick={this.openDetail}>Back</button>
        { this.state.data.map((dataPanel,index) => {
          return(
            <div>
            
            <button onClick={this.openList} key={index}>{dataPanel.name}
            </button>
            </div>
          )
        }
        )}
      </div>
    )
  }
}