import react,{ Component } from "react";

class CustomList extends Component{
    handleDelete=()=>{
        this.props.delete(this.props.index)
    }
    render(){
        return(
                <tr>
                    <td>{this.props.index+1}</td>
                    <td>{this.props.content}</td>
                    <td><button onClick={this.handleDelete}>Delete</button></td>
                </tr>
        );
    }
}
export default CustomList;