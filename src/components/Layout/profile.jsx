import React,{useEffect, useState} from "react";
import axios from 'axios';

const baseURL = "https://api.github.com/users/Yogesh-chiluka";

export default function Profile(){
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState('')
    useEffect(()=>{
        axios.get(baseURL)
    .then(function (response) {
        // handle success
        setProfileData(response.data);
    })
    .catch(function (error) {
        // handle error
        setError(error.message)
    })
    .finally(function () {
        // always executed
    });
    
},[])

if (!profileData) return null

    return(
        <>
        <h1 className=" text-xl  font-bold mb-2">Profile</h1>
        <div className="w-4/5 mx-auto p-4 grid grid-rows-2 gap-4 overflow-y-auto  text-xl tracking-normal font-medium">
            
                <div className="px-4  grid grid-cols-2">

                    <img src={profileData.avatar_url} alt="avatar_url" className="border rounded-full w-[250px]"/>
                    <ul className="mt-4 ">
                        <li className="p-4">Name:{" "}{profileData.name}</li>
                        <li className="p-4">Follwers: {profileData.followers}</li>
                        <li className="p-4">Following: {profileData.following}</li>
                        <li className="p-4">Public Repos: {profileData.public_repos}</li>
                    </ul>
                </div>

                <div className="text-xl/loose ">
                    Bio:
                    <p>{profileData.bio}</p>

                    {profileData.html_url}
                </div>
        </div>
    </>)

}