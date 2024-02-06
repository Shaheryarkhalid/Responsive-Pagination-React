import { useState,useEffect } from 'react'
import './App.css'
import Poduct_Card from './Poduct_Card'

function App() {
  const [Products,setPoducts]=useState({});
  const [CurrentPage,setCurrentPage]=useState(1);
  const [TotalPages,setTotalPages]=useState(1);
  
  // Products.products&& setTotalPages(Products.products)
  
  useEffect(()=>{
    let Get_Products=async ()=>{
      let prod=await fetch("https://dummyjson.com/products?limit=0")
              .then(res=>res.json())
              .then(data=>data);
      setPoducts(prod);
    } 
    console.log(Products);
    Get_Products();
  },[])
  return (
    <>
      <div className="Main-Section">
          <h1>Pagination For Product Page</h1>

          <div className="Poducts-Holder">
            {
              Products.products?Products.products.slice((CurrentPage-1)*10,CurrentPage*10).map((val,index)=>
                      <Poduct_Card key={index} Products={val}/>
                    )
                    :<h1>Loading...</h1> 

            }
          </div>
          {Products.products&&<div className="Pagination-Links">
            {CurrentPage!==1 ?
              <span onClick={()=>setCurrentPage(prev=>prev-1)} className='Previous-Page'>  &laquo;</span>
              :
              <span style={{backgroundColor:"#ddd",cursor:"not-allowed"}}  className='Previous-Page'>  &laquo;</span>
              
            }
            {
              Products.products&&[...Array(Products.products.length/10)].map((_,index)=>{
                
                return <span style={{backgroundColor:index+1===CurrentPage&&"black"}} key={index} onClick={()=>setCurrentPage(index+1)} className='Page-Number'>{index+1}</span>
              })
            }
            {CurrentPage!==10 ?
                        <span onClick={()=>setCurrentPage(prev=>prev+1)} className='Next-Page'>&raquo; </span>
                        :
                        <span style={{backgroundColor:"#ddd",cursor:"not-allowed"}} className='Next-Page'>&raquo; </span>
            }
          </div>}
      </div>
    </>
  )
}

export default App
