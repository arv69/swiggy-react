import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError();
    console.log(err);
    
  return (
    <div>
        {err.status} : {err.statusText}
        <h1>Oops! Something went wrong</h1>     
        <h2>Page not found</h2>
       
        <h5>{err.stack}</h5>
       
    </div>
  )
}

export default Error