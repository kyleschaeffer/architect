import React, { Component } from 'react';

class DrawingBoard extends Component {
  state = {}
  render() { 
    const style = {
      backgroundColor:"#6565be42"
    }

    return ( 
      <div className="drawing-board" {...this.props}>
        <div 
          onMouseDown={({screenX, screenY})=>console.log(screenX,screenY)} 
          onMouseUp={({screenX, screenY})=>console.log(screenX,screenY)} 
          style={{minHeight:350, height:"100%", ...style}}
        >
        
        </div>
      </div> 
    )
  }
}
 
export default DrawingBoard;