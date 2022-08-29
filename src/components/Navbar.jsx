import React,{useEffect} from 'react'
import { useState } from 'react';
import { useRef } from 'react'

function Navbar() {
  const navbarRef=useRef();
  const listRef=useRef();
  const buttonRef=useRef();
  
  let done=false;
  let showNav=window.innerHeight+20;
  let mobile=(window.visualViewport.width<=900);
  const displayNavbar=(animation,duration)=>{
        navbarRef.current.style.visibility="visible";
        navbarRef.current.style.animation=animation+" "+duration;
  };
  const hideNavbar=(animation,duration) => {
        navbarRef.current.style.animation=animation+" "+duration;
        navbarRef.current.style.visibility="hidden";
  };
  const scrollEvent=(e) => {
      if(!done && window.scrollY >showNav){
          displayNavbar("fadeInDown","1s");
          done=true
      }else if(window.scrollY<showNav){
          hideNavbar("fadeOutUp","1s");
          done=false
      }
  }
  const linkClickHandler=()=>{
      if(mobile){
        listRef.current.style.display="none";
      }
        done=false
  }

  useEffect(()=>{
    window.addEventListener("scroll",scrollEvent)
    return ()=> window.removeEventListener("scroll",scrollEvent);
  },[])
  return (
    <>
        <nav ref={navbarRef}>
            <button ref={buttonRef} onClick={(e)=>listRef.current.style.display=="block"?listRef.current.style.display="none":listRef.current.style.display="block"}>☰</button>
            <ul ref={listRef}>
                <li><a onClick={linkClickHandler} href="#start">Start</a></li>
                <li><a onClick={linkClickHandler} href="#techno">Technologie</a></li>
                <li><a onClick={linkClickHandler} href="#postep">Etapy</a></li>
                <li><a onClick={linkClickHandler}href="#team">O nas</a></li>
            </ul>
        </nav>
    </>
  )

}

export default Navbar