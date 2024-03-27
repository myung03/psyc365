import React from 'react'
import { useState, useEffect } from 'react'
import { Spinner } from '@chakra-ui/react' 
import './styles/Manual.css'
import { Home, Heading } from './components/export'

const Main = () => {
  const [showElement, setShowElement] = useState(false)
  const [disElement, setdisElement] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElement(true)
  }, 1200);
    const show = setTimeout(() => {
      setdisElement(true)
  }, 800);

  return () => clearTimeout(timer);
  }, [])

    return (<div>
         {showElement ? <div></div> : <div className={showElement ? 'hide splash_flex' : 'splash_flex'}>
        <Heading id="center" title="LOADING RESEARCH GUIDE"></Heading>
        <Spinner  emptyColor='gray.100' size='xl'/>
              </div>}
              <div className={disElement ? 'show' : 'static_hide'}>
       <Home ></Home> 
       </div>
      </div>
    )
  }
  
  export default Main