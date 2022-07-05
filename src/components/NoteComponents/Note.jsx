
import React from 'react'
import trash from '../img/trash.png'
const Note = ({ id, text, deleteNote }) => {
  return (
    <div className='note'>
        <div className='note__body'>
          {text}
        </div>
        <div className='note__footer' style={{justifyContent: 'flex-end'}}>
          <img onClick={()=> deleteNote(id)} src={trash} alt='trash' style={{width: 30, cursor: 'pointer'}} className='note__delete' aira-hidden='true'/>
        </div>
    </div>
  )
}

export default Note