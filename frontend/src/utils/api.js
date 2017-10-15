
const API = "http://localhost:3001";
const headers = {
  'Authorization': 'readable',
  'Accept': 'application/json',
  'Content-Type': 'application/json'
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

export const fetchPostComments = (postId) => {
  return fetch(`${API}/posts/${postId}/comments`, { headers })
    .then(res => res.json());
};

export const vote = (postId, up) => {
  return fetch(`${API}/posts/${postId}`, {
    headers,
    method: 'POST',
    body: JSON.stringify({option: up ? 'upVote' : 'downVote'}) 
  })
  .then(res => res.json());
};