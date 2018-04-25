import React, {Component} from 'react'

export default class Todo extends Component {



  render() {
    let {id,todo,onRemove,checked, handleCheck} = this.props
    return(
      <div>
      <li className={checked ? 'green' : 'red' }> <p className="todoP"> {todo} </p>
      <button className="xButton" onClick={() => onRemove(id)}> <img className="xPicButton" src="https://png.icons8.com/metro/1600/delete.png" alt="Remove Todo" /> </button>
      <input className="inputCheckbox" type="checkbox"  value={checked} onClick={() => handleCheck()}/>
      </li>
      </div>

      /*
      <li className={checked ? 'green' : 'red' }> {todo} <button className="xButton" onClick={() => onRemove(id)}> <img className="xPicButton" src="https://png.icons8.com/metro/1600/delete.png" alt="Remove Todo" /> </button>
      <input className="inputCheckbox" type="checkbox" value={checked} onClick={() => handleCheck()}/>
      </li>
      */
    )
  }

}
