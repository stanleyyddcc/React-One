import React from "react";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {answer:'', count:0};
    }
    handleClick(answer){
        this.setState({answer:answer });
    }
    handleCount(){
        this.setState({count:this.state.count+1});
    }
    render(){
        console.log(this.state.answer);
        return(
            <div>
                <h1>Hello Sherina, do you love me?, {this.state.answer}</h1>
                <button onClick={()=>{this.handleClick('Yes')}}>Yes</button>
                <button onClick={()=>{this.handleClick('Of Course')}}>Of Course</button>

                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.handleCount()}}>+</button>
            </div>
        );
    }
}

export default App;