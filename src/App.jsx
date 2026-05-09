
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import useFetch from './hooks/useFetch'

function App() {
  const [url,setUrl]=useState();
  const data =useFetch(url,url);
 
  return (
    <>
    <Navbar/>
    <h1>Titles:</h1>
    <div>
    <button className='btnJson' onClick={()=>setUrl('https://jsonplaceholder.typicode.com/posts')}>Posts</button>
    <button className='btnJson' onClick={()=>setUrl('https://jsonplaceholder.typicode.com/users')}>Users</button>
    </div>
    <ul>
     {data && data.map((post)=><li key={post.id}>{post.title || post.name}</li>)}
     </ul>
    </>
  )
}

export default App
'https://jsonplaceholder.typicode.com/posts'