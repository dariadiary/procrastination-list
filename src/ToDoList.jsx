import { Component } from "react";
import icon from "./assets/iconpaw.png";

export class ToDoList extends Component {
  state = {
    userInput: "",
    toDoList: []
  }
onChangeEvent(e){
  this.setState ({userInput: e})
}
addItem(input){
  if (input === "") {
    alert ("Your laziness is valid, but the field can’t stay empty!")
  }
  else {
  let listArray = this.state.toDoList;
  listArray.push (input);
  this.setState ({toDoList: listArray,
    userInput: ""})
  }
}
crossed(event) {
  const li = event.target;
  li.classList.toggle ('crossed');
}
deleteItem(index) {
  const updatedList = this.state.toDoList.filter((item, i) => i !== index);
  this.setState({ toDoList: updatedList });
}
deleteAll(){
  let listArray = this.state.toDoList;
  listArray = [];
  this.setState ({toDoList:listArray})
}
formSubmit(e){
  e.preventDefault();
}
render(){
  return (
    <div>
      <form onSubmit = {this.formSubmit}>
      <div className= "container">
        <input type = "text" placeholder = "Type it here before you forget..."
        onChange = {(e)=> {this.onChangeEvent(e.target.value)}}
        value = {this.state.userInput}/>
        </div>
        <div className="container">
        <button className = "add" onClick={()=> this.addItem (this.state.userInput)}>Fine, Add It</button>
        <button className = "delete"  onClick={()=> this.deleteAll ()}>Let It All Go</button>
        </div>
      <div className= "container">
      <ul>
          {this.state.toDoList.map ((item, index)=>
          ( <li key = {index}
            onClick = {this.crossed} 
            onDoubleClick={() => this.deleteItem(index)}>
              <img src = {icon} width = "20px"/> {item}</li>))}
        </ul>
      </div>
      </form>
    </div>
  )
}
}