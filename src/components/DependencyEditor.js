import React, { Component } from 'react';

class DependencyEditor extends Component {
  state = {}
  render() { 
    return ( 
      <div style={{backgroundColor:"#EFEFEFEF"}}>
        <h3 style={{textAlign:"center"}}>Dependencies</h3>
        <div style={{display:"flex"}}>
          <select multiple style={{flex:1}}/>
          <select multiple style={{flex:1}}/>
          <select multiple style={{flex:1}}/>
        </div>
      </div> 
    )
  }
}
 
export default DependencyEditor;