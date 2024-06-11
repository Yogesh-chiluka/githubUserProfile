

import axios from 'axios';
import { useEffect,useState } from 'react';

const baseURL = "https://api.github.com/users/Yogesh-chiluka/repos";


export default function Repositories(){
    const [reposData, setReposData] = useState(null);

    useEffect(()=>{
            axios.get(baseURL)
        .then(function (response) {
            // handle success
            setReposData(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    },[])

    if (!reposData) return null


    return(
        <>
  <h1 class="text-xl text-gray-200 font-bold mb-2 bg-gray-00">Repositories</h1>
  
        <div class="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 overflow-y-auto ">

            {reposData.map((repo)=>(<Card repo={repo}/>))}
     
             </div>

        </>
    )
}


function Card({repo}){


    return(<>
  
      
        <div className="w-[200px] h-[200px]  rounded-md  bg-gray-700 m-4">
       
        <div className="p-4 grid grid-rows-5 ">
          <h1 className="row-span-3 text-lg font-semibold  text-gray-200">{repo.name} 
          </h1>
          <p className="text-base">
            Language: {repo.language}
          </p>
          
          <a href={repo.html_url} target="_blank" ><button
            type="button"
            className="w-full rounded-sm bg-slate-600 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read
          </button></a>
        </div>
      </div>      
    </>
    )
}