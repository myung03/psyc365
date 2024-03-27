import React from 'react'
import { Heading } from './export'
import '../styles/manual/Page.css'

const Page = ({title, text, image, float}) => {
  return (
    <div className="layout">
    <div className="layout-content">
    <Heading align='right' title={title}></Heading>
    {text && text.map((text, i) => <p key={i}>{text}</p>)}
    </div>
    {image && <img className={float ? "layout-graphic floating" : "layout-graphic"} src={image} alt="graphic for text"></img>}
    </div>
  )
}

export default Page