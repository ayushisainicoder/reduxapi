// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Home() {
//  const [state, setState] = useState();

// useEffect(() => {
//   axios.get("https://jsonplaceholder.typicode.com/photos")
//     .then((response)=>{
//         console.log('thenn',response.data);
//         setState("response", response.data);
//         // console.log("first",response.data);
//     }).catch((error)=>{
//         console.log(error);
//     })
//     console.log(state,"api state checking");
//     },[])   


//   return(
//     <div>
//         {/* <h1>Home Component</h1> */}
//         {/* <h2>albumId</h2> */}
//         {state.map((details, index) => {
//             return (
//                 <>
//                   <div className="card" style={{width:"18rem"}}>
//                     {/* <img src="..." className="card-img-top" alt="..."/> */}
//                       <div className="card-body">
//                       <p className="card-text-id">Id: {details.id}</p>
                        
//                       </div>
//                     </div>
//             {/* <h6>{details.id}</h6>
//             <h6>{details.title}</h6> */}
//             </>
//                 )
//           })}
//         </div>
//       );
//     }

// import React,{useState,useEffect} from 'react';
// import './App.css';

// function Learn() {
//   const [data,setData]=useState([]);
//   const getData=()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts/1'
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//         setData(myJson)
//       });
//   }
//   useEffect(()=>{
//     getData()
//   },[])
//   return (
//     <div className="App">
//      {
//        data && data.length>0 && data.map((item)=><p>{item.about}</p>)
//      }
//     </div>
//   );
// }

// export default Learn;

// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//         console.log("res",response.data.title);
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }


// fetch('https://api.publicapis.org/entries')
//   .then(response => response.json())
//   .then(json => console.log(json))

import { useEffect, useState } from "react";
import axios from "axios";

export default function Learn() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    var impData = {
      url: "https://jsonplaceholder.typicode.com/photos",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(impData)
    .then((response) => {
      console.log("resp", response.data);
      setPhotos(response.data);
    }).catch((error) => {
        console.log(error)
    })

    //   Learn();
    // return () => {
console.log("photos",photos)
    // }
  }, []);
  // if(!photos) return null
  const handleClick=()=>{
    console.log("button Clicked");
  }

  const imageClick=()=>{
      console.log("button image click");
  }
  
  return (
    <div>
         
      {photos.map((details, index) => {
        return (
            <>
              <div className="card" style={{width:"18rem"}}>
                {/* <img src="..." className="card-img-top" alt="..."/> */}
                  <div className="card-body">
                  <p className="card-text-id">Album Id: {details.albumId}</p>
                    <p className="card-userId">Title: {details.title}</p>
                    <p className="card-title">URL: {details.url}</p>
                    <a href= "details.thumbnailUrl" className="btn btn-image" onClick={imageClick}>Thumbnail URL: {details.thumbnailUrl}</a>
                    {/* <p className="card-text">Completed: {details.completed.toString()}</p> */}
                    <a href="https://www.google.com" className="btn btn-primary" onClick={handleClick}>Go To Google Page</a>
                  </div>
                </div>
        {/* <h6>{details.id}</h6>
        <h6>{details.title}</h6> */}
        </>
            )
      })}
    </div>
  );
}