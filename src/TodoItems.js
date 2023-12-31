import React, { Component } from 'react';
class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li key={item.key}>{item.text}</li>
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ol className="theList">
                {listItems}
            </ol>
        );
    }
};

export default TodoItems;
