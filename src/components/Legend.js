import React, { Component } from 'react';
import LegendItem from './LegendItem.js';

class Legend extends Component {
  state = {legendItems:[{title:"Test"}]}

  deleteLegendItem(event){
    console.log(event);
  }
  render() { 
    const {legendItems} = this.state;
    return (  
      <div className = "legend" {...this.props.styles} style={{padding:"0px 20px"}}>
        <LegendItem title="Web Component" description="testing this" color="false" bottomBorder="true"></LegendItem>
        {
          legendItems.map((li,i)=>{
            return (
            <div key={li.title+i} style={{position:"relative"}}>
              <LegendItem {...li} style={{display:"inline-block"}}></LegendItem>
              <div style={{display:"inline-block", verticalAlign:"top",cursor:"pointer", margin:5}} onClick={()=>this.setState({ legendItems:  legendItems.filter(item=>item.title!=li.title)})}>x</div>
            </div>
            )
          })
        }
        <div  style={{cursor:"pointer"}}onClick={()=>this.setState({ "legendItems": this.state.legendItems.concat({title:"Item"+this.state.legendItems.length})})}>+</div>
      </div>
    )
  }
}
 
export default Legend;