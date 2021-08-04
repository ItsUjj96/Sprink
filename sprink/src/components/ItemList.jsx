import React from 'react';
import axios from 'axios';
import './Item.css'
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
    // document.getElementById('listDetails').style.display='none';
    document.getElementById('menu-items').style.display='none';
    
  }

  render() {
    
    return (
      <div id="menu-items">
        <button onClick={this.openDetail}>Back</button>
        <div className="listMain">
        { this.state.data.map((dataPanel,index) => {
          return(
            <span className="list">
              <span className="span2"><h3>{dataPanel.name}</h3>
            <select key={index}>{dataPanel['menu-items'].map((sub,index)=>
              <option key={index}>
                {sub.name}
              </option>
            )}
            </select>
            </span>
            
            </span>

          )
        }
        )}
        </div>
      </div>
    )
  }
}