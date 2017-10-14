
const API = "http://localhost:3001";
const headers = {
  'Accept': 'application/json',
  'Authorization': 'readable'
};

export const fetchCategories = () => {
  return fetch(`${API}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories); 
};

/**
 * Fetches all posts if category not provided or posts by category if category provided.
 * @param {*} category 
 */
export const fetchPosts = (category) => {
  const url = category ? `${API}/${category}/posts` : `${API}/posts`; 
  return fetch(url, { headers })
    .then(res => res.json());
};