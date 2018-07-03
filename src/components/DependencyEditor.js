import React, { Component } from 'react';

class DependencyEditor extends Component {
  state = {
    lists:[
      {
        name:"testList",
        contentTypes:["testCT"]
      },
      {
        name:"testList2",
        contentTypes:["testCT2"]
      }
    ],
    contentTypes:[
      {
        name:"testCT",
        siteColumns:["testSC1","testSC2","testSC3"]
      },
      {
        name:"testCT2",
        siteColumns:["testSC2"]
      }      
    ],
    siteColumns:[
      {
        name:"testSC1",
        type:"URL"
      },
      {
        name:"testSC2",
        type:"Text"
      },
      {
        name:"testSC3",
        type:"Text"
      },
    ]
  }

  createSeed = ()=>{

  }
  handleSelection = (type, name)=>{
    const { lists, contentTypes, siteColumns }= this.getRelated({ type, name });

    Array.from(this.listSelect.options).forEach(opt=>opt.selected=lists.map(l=>l.name).includes(opt.value));
    Array.from(this.contentTypeSelect.options).forEach(opt=>opt.selected=contentTypes.map(ct=>ct.name).includes(opt.value));
    Array.from(this.siteColumnSelect.options).forEach(opt=>opt.selected=siteColumns.map(sc=>sc.name).includes(opt.value));
  }
  getRelated = ({type,name})=>{
    let lists = [];
    let contentTypes = [];    
    let siteColumns = [];    

    if(type==="list"){
      lists= this.state.lists.filter(l=>l.name===name);
      contentTypes = lists.reduce((prev,curr)=>{return prev.concat(curr.contentTypes)},[]);
      contentTypes = this.state.contentTypes.filter((ct)=>contentTypes.includes(ct.name));
      siteColumns = contentTypes.reduce((prev,curr)=>{return prev.concat(curr.siteColumns)},[]);
      siteColumns = this.state.siteColumns.filter((sc)=>siteColumns.includes(sc.name));
    }else if(type==="contentType"){
      lists = this.state.lists.filter(l=>l.contentTypes.includes(name));
      contentTypes= this.state.contentTypes.filter(ct=>ct.name===name);
      siteColumns = contentTypes.reduce((prev,curr)=>{return prev.concat(curr.siteColumns)},[]);
      siteColumns = this.state.siteColumns.filter((sc)=>siteColumns.includes(sc.name));
    }else if(type==="siteColumn"){
      siteColumns = this.state.siteColumns.filter((sc)=>sc.name===name);
      contentTypes = this.state.contentTypes.filter(ct=>ct.siteColumns.includes(name))
      lists = this.state.lists
        .filter(l=>l.contentTypes
          .reduce(
            (prev, curr)=>{
              return prev || contentTypes
                .map(ct=>ct.name)
                .includes(curr)
            },
            false
          )
        );
    }

    return {
      lists,
      contentTypes,
      siteColumns
    }
  }

  addToSelect = (arg)=>{
    console.log(arg);
  }

  render() { 
    return ( 
      <div style={{backgroundColor:"#EFEFEFEF"}}>
        <h3 style={{textAlign:"center"}}>Dependencies</h3>
        <div style={{display:"flex"}}>
          <div style={{flex:1, margin:2}}>
            <label htmlFor="" 
              ref={node=>(this.newList = node)} 
              onChange={(ev)=>console.log(ev)}>
              Lists
            </label>
            <br />
            <input type="text"/>
            <button onClick={this.addToSelect.bind(this,this.newList)}>+</button>
            <br />
            <select ref={(n)=>this.listSelect = n} multiple name="list" style={{width:"100%"}}>
              {this.state.lists.map((list)=><option onClick={this.handleSelection.bind(this,"list",list.name)} key={list.name}>{list.name}</option>)}
            </select>
          </div>
          <div style={{flex:1, margin:2}}>
            <label htmlFor="">Content Types</label>
            <br />
            <input type="text"/>
            <button>+</button>
            <br />
            <select ref={(n)=>this.contentTypeSelect = n} multiple name="contentType" style={{width:"100%"}}>
              {this.state.contentTypes.map((contentType)=><option onClick={this.handleSelection.bind(this,"contentType",contentType.name)} key={contentType.name}>{contentType.name}</option>)}
            </select>
          </div>
          <div style={{flex:1, margin:2}}>
            <label htmlFor="">Site Columns</label>
            <br />
            <input type="text"/>
            <button>+</button>
            <br />
            <select ref={(n)=>this.siteColumnSelect = n} multiple name="siteColumn" style={{width:"100%"}}>
              {this.state.siteColumns.map((siteColumn)=><option onClick={this.handleSelection.bind(this,"siteColumn",siteColumn.name)} key={siteColumn.name}>{siteColumn.name}</option>)}
            </select>
          </div>
        </div>
        <button onClick={this.createSeed}>Export</button>
      </div> 
    )
  }
}
 
export default DependencyEditor;