
import axios from 'axios';
import { useEffect,useState } from 'react';
import CardsLayout from './repos';
import { NavLink, Outlet } from 'react-router-dom';

const baseURL = "https://api.github.com/users/Yogesh-Chiluka";

export default function Layout(){
    const [data, setData] = useState(null);

    useEffect(()=>{
    axios.get(baseURL )
  .then(function (response) {
    // handle success
    setData(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    },[])

    if (!data) return null

    return(

<div className="flex  bg-gray-700 text-white p-4 min-h-screen max-h-screen font-sans">
  <nav className=" w-1/5 bg-gray-800 text-white p-4 m-2 rounded-md">
  <img src={data.avatar_url} className=' rounded-full mx-auto w-[200px]'/>
  <h2 className="text-lg text-center font-bold m-2 p-2">{data.name}</h2>
    <ul className="space-y-2 text-sm">
      <li><NavLink to='/' className="block hover:bg-gray-700 p-1 rounded">Home</NavLink></li>
      <li><NavLink to='/Profile' className="block hover:bg-gray-700 p-1 rounded">Profile</NavLink></li>
      <li><NavLink to="/Repositories" className="block hover:bg-gray-700 p-1 rounded">Repositories</NavLink></li>

    </ul>
  </nav>

  <main className=" w-4/5 p-4 bg-gray-800 m-2 rounded-md grid grid-cols-1 overflow-hidden text-gray-300">

       
    <Outlet/>

  </main>
</div>)
}