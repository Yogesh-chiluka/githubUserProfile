# [gitHub User Profile](https://github-user-profile-six.vercel.app/)

This is a simple gihub User Profile UI built with React, Axios, React-Router and Tailwind CSS. It allows users to search github user profile by their profile name.

  
## Features
- Search your gihub profile (by username)  using Github API
- My github profile and Bio using Github API
- My git repos using Github API

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Yogesh-chiluka/githubUserProfile.git
   cd githubUserProfile
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm start
   ```

   The app should now be running on `http://localhost:3000`.

## Usage

1. **Get your github profile:**
   - Click on search box and enter your github profile name.

2. **To get my Profile and Repos:**
   - Click on Profile and Repositories to get my profile, bio and repos.

## My Profile and Repos.

```javascript
//  getData function to get my Profile and Repos
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

// Loader function for my profile data
export const Loader = () => {
    let fetch_data = getData("https://api.github.com/users/Yogesh-chiluka")
    console.log("loading data");
    console.log(fetch_data)
    return fetch_data
  };

// Loader function for my repos data
export const Loader = () => {
  let fetch_data = getData("https://api.github.com/users/Yogesh-Chiluka/repos")
  console.log("loading data");
  console.log(fetch_data)
  return fetch_data
};
```

## Query user by github profile name

```javascript
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
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## Screenshots
![Search.png](https://github.com/Yogesh-chiluka/githubUserProfile/blob/main/Search.png)
![Search.png](https://github.com/Yogesh-chiluka/githubUserProfile/blob/main/Profile.png)
![Search.png](https://github.com/Yogesh-chiluka/githubUserProfile/blob/main/Repos.png)
  
