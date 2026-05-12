
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import useFetch from './hooks/useFetch'
import Footer from './components/Footer';

function App() {
  const [url,setUrl]=useState();
  const data =useFetch(url,url);
 
  return (
    <>
    <Navbar/>
    <h1 className='flex justify-center mt-32 text-[40px] font-[verdana]'>Titles:</h1>
    <div className='flex justify-center align-center gap-4'>
    <button className="bg-orange-300 hover:bg-orange-400 w-32 font-mono rounded-lg shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 h-[40px] mt-48" onClick={()=>setUrl('https://jsonplaceholder.typicode.com/posts')}>Posts</button>
    <button className= "bg-orange-300 hover:bg-orange-400 w-32 font-mono rounded-lg shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 h-[40px] mt-48" onClick={()=>setUrl('https://jsonplaceholder.typicode.com/users')}>Users</button>
    </div>
    <ul className='mx-auto w-fit text-left m-16 space-y-2 bg-base-300 rounded-box shadow-lg list-disc'>
     {data && data.map((post)=><li className='m-6' key={post.id}>{post.title || post.name}</li>)}
     </ul>
     <Footer/>
    </>
  )
}

export default App
'https://jsonplaceholder.typicode.com/posts'