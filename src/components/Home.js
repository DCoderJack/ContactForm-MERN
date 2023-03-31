import React from 'react'
import Form from './Form'
import Video from './Video'

const Home = (props) => {
  return (
    <>
        <Video showAlert={props.showAlert}/>
        <Form showAlert={props.showAlert}/>
    </>
  )
}

export default Home