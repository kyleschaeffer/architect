import React, { Component } from 'react';
import LegendItem from './LegendItem.js';

class Legend extends Component {
  deleteLegendItem = (toDelete)=>{
    this.props.del(toDelete);
  }

  render() { 
    const {mainTitle, mainDescription, legendItems, add, del, updateHeader, update} = this.props;
    return (  
      <div className = "legend" {...this.props.styles} style={{padding:"0px 20px"}}>
        <LegendItem 
          title={mainTitle || "Web Component Title"} 
          description={mainDescription || "Add a description"} 
          bottomborder="true"
          update={updateHeader}
        >
        </LegendItem>
        {
          legendItems.map((li,i)=>{
            return (
            <div key={li.id} style={{position:"relative"}}>
              <LegendItem 
                {...li}
                style={{display:"inline-block"}}
                update={update}
              ></LegendItem>
              {del &&
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
        { add &&
          <div  
            style={{cursor:"pointer"}}
            onClick={add}>
            +
          </div>
        }
      </div>
    )
  }
}
 
export default Legend;