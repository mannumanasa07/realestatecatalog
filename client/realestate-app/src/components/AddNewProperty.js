import React from 'react'
import BasicInfo from './BasicInfo'

function AddNewProperty() {

    function onClick(){
        return(<BasicInfo/>)
        
    }
  return (
    <button onClick={onClick}>ADD NEW PROPERTY</button>
  )
}

export default AddNewProperty