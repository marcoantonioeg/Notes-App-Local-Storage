import React from 'react'
const CreateNote = ({textHandler, saveHandler, inputText}) => {
    const charLimit = 100
    const charLeft = charLimit - inputText.length;
  return (
    <div className='note' style={{background: 'rgba(255,255,255,0)'}}>
        <textarea value={inputText} onChange={textHandler} cols="10" rows="5" placeholder='Escribe...' maxLength={charLimit}></textarea>
        <div className='note__footer'>
            <span className='label'>{charLeft} Left {charLeft> 20 ? '😀': '😐'}</span>
            <button className='note__save' onClick={saveHandler}>Guardar ✔</button>
        </div>
    </div>
  )
}

export default CreateNote