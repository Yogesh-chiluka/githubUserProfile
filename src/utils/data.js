import axios from "axios";

// export async function getUserProfiles(query) {
//     await fakeNetwork(`getContacts:${query}`);
//     let contacts = await localforage.getItem("contacts");
//     if (!contacts) contacts = [];
//     if (query) {
//       contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
//     }
//     return contacts.sort(sortBy("last", "createdAt"));
//   }




export function getRepos() {
    return axios.get(`https://api.github.com/users/Yogesh-Chiluka/repos`)
      .then(function (response) {
        return response.data; // <-- returned to getReasonTypes
      })
      .catch(function (error) {
        console.log(error);
        throw error;
      });
  }


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