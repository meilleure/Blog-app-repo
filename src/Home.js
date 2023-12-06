import { useState, useEffect } from 'react';
import BlogList from "./bloglist";
import useFetch from './usefetch';

const Home = () => {
  const {data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');
 
   return (
     <div className="home">

      {error && <div> { error }</div> }

      { isLoading && <div>loading.......</div>}

      {blogs && <BlogList blogs={blogs} title ="All Blogs"/>}

     </div>
   );

 }
  
 export default Home;