import React, { Component } from 'react';

class DependencyEditor extends Component {
  state = {
    
  }
  createSeed = ()=>{
    
  }
  render() { 
    return ( 
      <div style={{backgroundColor:"#EFEFEFEF"}}>
        <h3 style={{textAlign:"center"}}>Dependencies</h3>
        <div style={{display:"flex"}}>
          <div style={{flex:1, margin:2}}>
            <label htmlFor="">Lists</label>
            <select multiple style={{width:"100%"}}>
            </select>
          </div>
          <div style={{flex:1, margin:2}}>
            <label htmlFor="">Content Types</label>
            <select multiple style={{width:"100%"}}>
            </select>
          </div>
          <div style={{flex:1, margin:2}}>
            <label htmlFor="">Site Columns</label>
            <select multiple style={{width:"100%"}}>
            </select>
          </div>
        </div>
        <button onClick={this.createSeed}>Export</button>
      </div> 
    )
  }
}
 
export default DependencyEditor;