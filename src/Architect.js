import React, { Component } from 'react';
import './Architect.css';
import logo from './tool.svg';

import Legend from './components/Legend.js';
import DrawingBoard from './components/DrawingBoard.js';
import DependencyEditor from './components/DependencyEditor.js';


class Architect extends Component {
  state = {
    card: [],
    legend: {
      legendItems:[
        {
          id:Date.now(), 
          title:"Edit Label", 
          description:"Describe it here.",
          color:{r:200,g:20,b:20,a:.5}
        }
      ],
    },
    dependency:{
      lists:[],
      contentTypes:[],
      siteColumns:[],
    },
  }

  addLegendItem = ()=>{
    const {legend} = this.state;
    this.setState({legend: 
      {
        ...legend,
        legendItems: [
          ...legend.legendItems, 
          {
            title:"New Item", 
            color:{
              r:Math.floor(Math.random()*255),
              g:Math.floor(Math.random()*255),
              b:Math.floor(Math.random()*255),
              a:.7
            }, 
            id:Date.now()
          }
        ]
      }
    })
  }
  deleteLegendItem = ({id})=>{
    const {legend} = this.state;

    this.setState({ 
      legend:{...legend, legendItems:  legend.legendItems.filter(item=>item.id!==id)}
    })
  }
  updateLegendHeader = ({title, description})=>{
    const {legend} = this.state;

    this.setState({
      legend:{
        ...legend, 
        mainTitle:title,
        mainDescription:description, 
        legendItems:legend.legendItems}
      });
  }
  updateLegendItem = ({id, title,description})=>{
    const {legend} = this.state;
    const updatedItems = legend.legendItems
      .map((li)=>{
        if(id && li.id === id){
          return {...li, title, description, id}
        }

        return li; 
      });
    this.setState({legend : {...legend, legendItems: updatedItems} });
  }

  render() {
    return (
      <div className="architect">
        <header className="architect-header">
          <h1 className="architect-title"><img src={logo} className="architect-logo" alt="logo" />rchitect</h1>
        </header>
        <div className="blueprint" style={{display:"flex"}}>
          <DrawingBoard 
            style={{flex:"3"}}
          >
          </DrawingBoard>
          <Legend 
            style={{flex:"1"}} 
            {...this.state.legend} 
            add={this.addLegendItem} 
            del={this.deleteLegendItem} 
            updateHeader={this.updateLegendHeader}
            update={this.updateLegendItem}
          >
          </Legend>
        </div>
        <div>
          <DependencyEditor></DependencyEditor>
        </div>
      </div>
    );
  }
}

export default Architect;