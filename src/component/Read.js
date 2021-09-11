import react,{ Component } from "react";
import CustomList from './CustomList'

class Read extends Component{
    handleDelete=(index)=>{
        this.props.deleteData(index)
    }
    render(){
        var list = [];
        var content = this.props.content;
        for(var i=0;i<content.length;i++){
            list.push(<CustomList key={i} index={i} content={content[i].content} delete={this.handleDelete}></CustomList>)
        }
        return(
                <table>   
                    <thead>
                        <tr>
                            <td>Number</td>
                            <td>Content</td>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
                
        );
    }
}

export default Read;