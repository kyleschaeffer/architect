import React, { Component } from 'react';


import './LegendItem.css';

class LegendItem extends Component {
  state = {
    title:"Title", 
    description:"Describe this.",
    displayColorPicker: false,
    color:{r:100,g:1,b:1,a:1.0},
    ... this.props
  };


  handleTitleChange = (event)=>{
    this.setState({"title":this.titleInput.value});
  }
  handleDescriptionChange = (event)=>{
    this.setState({"description":this.descInput.value});
  }
  render() { 
    const {title, color, description, bottomBorder} = this.state;

    const colorBlockStyle = color?{"backgroundColor":`rgba(${color.r},${color.g},${color.b},${color.a})`}:{};

    return (  
      <div className="legend-item">
        <div className="color-title">
          <div className="color" style={{...colorBlockStyle}} onClick={()=>alert("colorpicker not implemented")}></div>
          <input className="legend-title" value={title} onChange={this.handleTitleChange} ref={(node)=>this.titleInput = node}/>
        </div>
        <textarea className="legend-description" value={description} onChange={this.handleDescriptionChange} ref={(node)=>this.descInput = node}/>
        {bottomBorder && <div style={{"borderBottom":"solid rgba(0,0,0,.2) 1px", "marginRight":"20%", "marginLeft":"10%", marginBottom:10}}></div>}
      </div>
    )
  }
}
 
export default LegendItem;