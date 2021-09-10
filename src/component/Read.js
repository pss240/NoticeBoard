import react,{ Component } from "react";


class Read extends Component{
    render(){
        var list = [];
        var content = this.props.content;
        for(var i=0;i<content.length;i++){
            list.push(<li key={i}>{content[i]}</li>)
        }
        return(
                <ol>
                    {list}
                </ol>
        );
    }
}

export default Read;