import React, { Component } from 'react';


import './LegendItem.css';

class LegendItem extends Component {
  handleTitleChange = (event)=>{
    this.props.update({
      id: this.props.id,
      title:this.titleInput.value,
      description:this.descInput.value
    });
  }
  handleDescriptionChange = (event)=>{
    console.log(this.props);
    this.props.update({
      id: this.props.id,
      title:this.titleInput.value,
      description:this.descInput.value
    });
    
    let {target} = event;
    target.style.height = ((target.scrollHeight)-4)+"px";
  }
  render() { 
    const {title, color, description, bottomborder} = this.props;

    const colorBlockStyle = color?{"backgroundColor":`rgba(${color.r},${color.g},${color.b},${color.a})`}:{};

    return (  
      <div className="legend-item" style={{...this.props.style}}>
        {color && 
          <div 
            className="color" 
            style={{...colorBlockStyle}} 
            onClick={()=>alert("colorpicker not implemented")}>
          </div>
        }
        <div className="legend-info">
          {this.props.update?
            <input 
              className="legend-title" 
              value={title} 
              onChange={this.handleTitleChange} 
              ref={(node)=>this.titleInput = node}/>
            :
            <div className="legend-title">{title}</div>
          }
          {this.props.update?
          <textarea 
            className="legend-description" 
            value={description} 
            onChange={this.handleDescriptionChange} 
            ref={(node)=>this.descInput = node}/>
          :
          <div className="legend-description">
            {description}
          </div>
        }
        </div>
        
        {bottomborder && <div style={{"borderBottom":"solid rgba(0,0,0,.2) 1px", "marginRight":"20%", "marginLeft":"10%", marginBottom:10}}></div>}
      </div>
    )
  }
}
 
export default LegendItem;