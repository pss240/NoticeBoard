import React,{ Component } from "react";

class Create extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    handleChange=(e)=>{
        this.setState({value:e.target.value})
    }
    handleSubmit=(e)=>{
        this.props.createData(this.state.value);
        this.setState({value:''})
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}
export default Create;