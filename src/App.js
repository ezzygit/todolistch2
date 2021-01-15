import React from "react";
import './App.css';

class App extends React.Component {

    state = {
        input: "",
        tasks: [],
    }

handleInput = (event) => {
this.setState({input:event.target.value})
};

addTasks = () => {
    let newTasks = [...this.state.tasks]
    newTasks.push(this.state.input)
    this.setState({tasks:newTasks,input:""})
}



render () {
    return (
        <div className="App">
        <div className="App-container">
        <h1 className="title"> To Do List </h1> 
           <br></br>

              <input className="input" value={this.state.input} onChange={this.handleInput}></input>
              
              <button className="button" value= {this.state.input} onClick={(this.addTasks)}>add</button>
        
           <div className="tasks" >{this.state.tasks.map((num,index)=>{
                 return <p className="tasks" key={index}>{num}</p>;})}
           </div>
        </div>
    </div>  
            
        
)}}




export default App;
