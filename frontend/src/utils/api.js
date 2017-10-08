
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