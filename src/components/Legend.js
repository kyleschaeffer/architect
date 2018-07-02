import React, { Component } from 'react';
import LegendItem from './LegendItem.js';

class Legend extends Component {
  state = {legendItems:[{id:Date.now(), title:"Test", description:"Testing this thing out",color:{r:200,g:20,b:20,a:.5}}]}

  deleteLegendItem = (toDelete)=>{
    this.setState({ legendItems:  this.state.legendItems.filter(item=>item.id!=toDelete.id)})
  }
  addLegendItem = (event)=>{
    const {legendItems} = this.state;

    this.setState({ 
      "legendItems": 
        [...this.state.legendItems, 
        {title:"Item"+ legendItems.length, color:{r:20,g:200,b:20,a:.5}, id:Date.now()}
      ]
    })
  }
  updateMainLegendItem = ({title,description})=>{
    this.setState({mainTitle:title, mainDescription: description});
  }
  updateLegendItem = ({id, title,description})=>{
    const {legendItems} = this.state;
    const updatedItems = legendItems
      .map((li)=>{
        if(id && li.id === id){
          return {...li, title, description, id}
        }

        return li; 
      });
    this.setState({"legendItems" : updatedItems });
  }

  render() { 
    const {mainTitle, mainDescription, legendItems} = this.state;
    return (  
      <div className = "legend" {...this.props.styles} style={{padding:"0px 20px"}}>
        <LegendItem 
          title={mainTitle || "Web Component Title"} 
          description={mainDescription || "Add a description"} 
          bottomborder="true"
          update={this.updateMainLegendItem}
        >
        </LegendItem>
        {
          legendItems.map((li,i)=>{
            return (
            <div key={li.id} style={{position:"relative"}}>
              <LegendItem 
                {...li}
                key={li.id}
                style={{display:"inline-block"}}
                update={this.updateLegendItem}
              ></LegendItem>
              {true &&
                <div 
                  style={{
                    display:"inline-block", 
                    verticalAlign:"top",
                    cursor:"pointer", 
                    margin:5
                  }} 
                  onClick={this.deleteLegendItem.bind(this,li)}>x</div>
              }
            </div>
            )
          })
        }
        <div  
          style={{cursor:"pointer"}}
          onClick={this.addLegendItem}>
          +
        </div>
      </div>
    )
  }
}
 
export default Legend;