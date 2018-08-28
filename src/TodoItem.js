import React from 'react'

class TodoTtem extends React.Component{
  handleDelete () {
    this.props.delete(this.props.index)
  }
  render() {
    return (
      <div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
    )
  }
}

export default TodoTtem