import axios from "axios";
import { useEffect, useState } from "react"

export default function Index(){

    const [query, setQuery] = useState('')

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
        } catch (error) {
          setError(error);

        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        if (query) {
          const debounceFetch = setTimeout(fetchData, 500); // Debounce for 500ms
          return () => clearTimeout(debounceFetch);
        }
      }, [query]); // Effect depends on query

    return(<>
        
        

      <input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}} placeholder="Search...." className=" text-xl text-gray-600 font-bold mb-2  focus:outline-transparent px-4"/>
        
      <div>{userData.html_url}</div>
        <div className="w-4/5 mx-auto p-4 grid grid-rows-2 gap-4 overflow-y-auto  text-xl tracking-normal font-medium mt-8">
               
                <div className="px-4  grid grid-cols-2">
                    {loading? (<div className="text-4xl ">Loading....</div>):(<img src={userData.avatar_url} alt="avatar_url" className="border rounded-full w-[250px]"/>)}
                    <ul className="mt-4 ">
                        <li className="p-4">Name:{" "}{userData.name}</li>
                        <li className="p-4">Follwers: {userData.followers}</li>
                        <li className="p-4">Following: {userData.following}</li>
                        <li className="p-4">Public Repos: {userData.public_repos}</li>
                    </ul>
                </div>

                <div className="text-xl/loose ">
                    Bio:
                    <p>{userData.bio}</p>

                    
                </div>
        </div>
    
    <div>
    
    </div>
    </>)
}