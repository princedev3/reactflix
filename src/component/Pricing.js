import React, { useContext, useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { Container } from './NavBar'
import "../styles/Pricing.css"

const Pricing = () => {
    const {toggle} = useContext(Container)
    const[toggleprice,setToggleprice]= useState(false)
    const[toggleprice1,setToggleprice1]= useState(false)
    const[toggleprice2,setToggleprice2]= useState(false)
  return (
    <div id='price-container' className={toggle? "mainBgColor":"secondaryBgColor"}>
         <div className={"price-container"}>
          <div className={""}>
            <h1>Basic</h1>
          </div>
          <div >
          {toggleprice? <h4 className='price-tag'>7.99 <strong>$</strong> <span>/Monthly</span></h4>: <h4 className='price-tag-right'>80.6 <strong>$</strong><span>/Yearly</span></h4>}
          </div>
          <div className='price-topics'>
          <h4><AiOutlineCheck/> unlimited films and tv programmes</h4>
          <h4><AiOutlineCheck/> watch on mobile phones and tablet</h4>
          <h4><AiOutlineCheck/> cancel at anytmime</h4>
          <h4><AiOutlineCheck/> first month completely free</h4>
          </div>
          <div className='price-button'>
            <button>Buy Now</button>
          </div>
          <div className='toggleprice-element' onClick={()=>setToggleprice(!toggleprice)}>
            <div className={toggleprice?'toggleprice-container':"toggleprice-container-move"} >
    
            </div>
          </div>
          </div>
         <div className={"price-container"}>
          <div className={""}>
            <h1>Basic</h1>
          </div>
          <div >
          {toggleprice1? <h4 className='price-tag'>7.99 <strong>$</strong> <span>/Monthly</span></h4>: <h4 className='price-tag-right'>80.6 <strong>$</strong><span>/Yearly</span></h4>}
          </div>
          <div className='price-topics'>
          <h4><AiOutlineCheck/> unlimited films and tv programmes</h4>
          <h4><AiOutlineCheck/> watch on mobile phones and tablet</h4>
          <h4><AiOutlineCheck/> cancel at anytmime</h4>
          <h4><AiOutlineCheck/> first month completely free</h4>
          </div>
          <div className='price-button'>
            <button>Buy Now</button>
          </div>
          <div className='toggleprice-element' onClick={()=>setToggleprice1(!toggleprice1)}>
            <div className={toggleprice1?'toggleprice-container':"toggleprice-container-move"} >
    
            </div>
          </div>
          </div>
         <div className={"price-container"}>
          <div className={""}>
            <h1>Basic</h1>
          </div>
          <div className='price-num' >
          {toggleprice2? <h4 className='price-tag'>7.99 <strong>$</strong> <span>/Monthly</span></h4>: <h4 className='price-tag-right'>80.6 <strong>$</strong><span>/Yearly</span></h4>}
          </div>
          <div className='price-topics'>
          <h4><AiOutlineCheck/> unlimited films and tv programmes</h4>
          <h4><AiOutlineCheck/> watch on mobile phones and tablet</h4>
          <h4><AiOutlineCheck/> cancel at anytmime</h4>
          <h4><AiOutlineCheck/> first month completely free</h4>
          </div>
          <div className='price-button'>
            <button>Buy Now</button>
          </div>
          <div className='toggleprice-element' onClick={()=>setToggleprice2(!toggleprice2)}>
            <div className={toggleprice2?'toggleprice-container':"toggleprice-container-move"} >
    
            </div>
          </div>
          </div>
         
    </div>
  )
}

export default Pricing