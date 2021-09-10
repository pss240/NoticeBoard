import react,{ Component } from "react";

class Update extends Component{
    constructor(props){
        super(props);
        this.state={
            mode:false,
            updateData:'',
            data:props.content
        }
    }
    handleUpdate=(i)=>{
        this.setState({
            mode:true,
            index:i,
            updateData:this.state.data[i]
        });
    }
    handleChange=(e)=>{
        this.setState({updateData:e.target.value})
    }
    handleSubmit=(e)=>{
        this.props.updateData(this.state.updateData,this.state.index)
        e.preventDefault();
    }
    render(){
        var list=[];
        for(var i=0;i<this.state.data.length;i++){
            list.push(<li key={i}><a href="#" data-id={i} onClick={
                (e)=>{ 
                    e.preventDefault();
                    this.handleUpdate(e.target.dataset.id)
            }}>{this.state.data[i]}</a></li>)
        }
        return(
            <div>
                {this.state.mode ? 
                    <span>
                        <ol>
                            {list}
                        </ol>
                        <form onSubmit={this.handleSubmit}>
                           <input id="updatetext" type="text" value={this.state.updateData} onChange={this.handleChange}></input>
                           <input type="submit" value="Submit"></input>
                        </form>
                    </span>:
                    <ol>
                        {list}
                    </ol>    
                }
            </div>
        );}}
export default Update;
