import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

export class TodosContainer extends Component {

    renderTodos = () => {
        return this.props.todos.map((todo, id) => <Todo key={id} todo={todo} />)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.renderTodos()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer)
