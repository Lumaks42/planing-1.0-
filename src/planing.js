import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class Planing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        var itemArray = this.state.items;

    if (this._inputElement.value !== "") {    
      itemArray.unshift(
        {      
          text: this._inputElement.value,      
          key: Date.now()    
        }
      );

      this.setState({      
        items: itemArray    
      });   

      this._inputElement.value = "";  
    }   
    console.log(itemArray);   
    e.preventDefault();
    }
    render() {
        return (
            <div className="listMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input  ref={(a) => this._inputElement = a}
                                placeholder="Задача"></input>
                        <button type="submit">Добавить</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        );
    }
}

export default Planing;