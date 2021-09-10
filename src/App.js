import { Component } from 'react';
import './App.css';
import Create from './component/Create';
import Read from './component/Read';
import Update from './component/Update';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:["list1","list2","list5"],
      create:false,
      update:false
    }
  }
  createData=(text)=>{
    const nextdata=this.state.data
    nextdata.push(text)
    this.setState({data:nextdata})
  }
  updateData=(text,index)=>{
    const nextdata=this.state.data;
    nextdata[index]=text;
    this.setState({
      data:nextdata,
      update:false
    })
  }
  render(){
    return (
      <div className="App">
        {this.state.update ? 
          <Update content={this.state.data} updateData={this.updateData}></Update>:
          <Read content = {this.state.data}></Read>
        }
        {
          this.state.create===true ? <Create createData={this.createData}></Create>: ''
        }
        <button onClick={()=>{
          this.setState({data:["state list1","state list2","state list3"]});
          }}>setState</button>
        <button onClick={()=>{
          {this.state.create===false ? this.setState({create:true}):this.setState({create:false})};
        }}>Create</button>
        <button onClick={()=>{
          {this.state.update===false ? this.setState({update:true}):this.setState({update:false})};
        }}>Update</button>   
      </div>
    );
  }
}
export default App;
