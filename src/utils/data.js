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




export function getData(data) {
    return axios.get(data)
      .then(function (response) {
        return response.data; // <-- returned to getReasonTypes
      })
      .catch(function (error) {
        console.log(error);
        throw error;
      });
  }

