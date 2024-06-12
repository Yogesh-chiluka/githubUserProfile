import axios from "axios";
import { useEffect, useState } from "react"
import { Card } from "./repos";
import { fetchData, fetchReposData } from "../../utils/data";

export default function Index(){

    const [query, setQuery] = useState('')
    const [reposData, setReposData] = useState('')
    const [userData, setUserData] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get(`https://api.github.com/users/${query}`);
          setUserData(response.data);
          console.log(response.data)
          fetchReposData()
        } catch (error) {
          setError(error);
    
        } finally {
          setLoading(false);
        }
      };
    
    const fetchReposData = async () =>{
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get(`https://api.github.com/users/${query}/repos`);
          setReposData(response.data);
          console.log(response.data)
        } catch (error) {
          setError(error);
    
        } finally {
          setLoading(false);
        }
      }

      useEffect(() => {
        if (query) {
          const debounceFetch = setTimeout(fetchData, 500); // Debounce for 500ms
    
          return () => clearTimeout(debounceFetch);
        }
      }, [query]); // Effect depends on query


    return(<>
        
        

      <input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}} placeholder="Search...." className=" text-xl text-gray-600 font-bold mb-2  focus:outline-transparent px-4"/>
        
      <div>{userData.html_url}</div>
        <div className=" mx-auto p-2 grid grid-rows-2 gap-4 overflow-y-auto  text-xl tracking-normal font-medium mt-4">
               
                <div className="px-4  grid grid-cols-3">
                    {loading? (<div className="text-4xl ">Loading....</div>):(<img src={userData.avatar_url} alt="avatar_url" className="border rounded-full w-[250px]"/>)}
                    <ul className="mt-4 ">
                        <li className="p-4">Name:{" "}{userData.name}</li>
                        <li className="p-4">Follwers: {userData.followers}</li>
                        <li className="p-4">Following: {userData.following}</li>
                        <li className="p-4">Public Repos: {userData.public_repos}</li>
                    </ul>
                    <div className="text-xl/loose ">
                    Bio:
                    <p>{userData.bio}</p>
                    </div>
                </div>
                
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 overflow-y-auto">
                
                {reposData.length === 0 ? (
                    <p>No repositories to display</p>
                    ) : (
                    reposData.map((repo) => <Card key={repo.id} repo={repo} />)
                    )}

                </div>
                
        </div>
    
    <div>
    
    </div>
    </>)
}