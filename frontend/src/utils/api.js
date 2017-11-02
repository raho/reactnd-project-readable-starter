
import uuidv1 from 'uuid/v1';

const API = "http://localhost:3001";

export const currentUserName = 'Rachele Bellis';

const headers = {
  'Authorization': currentUserName,
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

export const fetchPost = (id) => {
  return fetch(`${API}/posts/${id}`, { headers })
    .then(res => {
      if (!res.ok) {
        return res.json().then(errorJson => {
          throw new Error(errorJson.error)
        });
      }
      const post = res.json();
      if (post.id) {
        return post;
      } else {
        throw new Error(`post with id ${id} not found`);
      }
    });
}

export const fetchPostComments = (postId) => {
  return fetch(`${API}/posts/${postId}/comments`, { headers })
    .then(res => res.json());
};

export const votePost = (postId, up) => {
  return fetch(`${API}/posts/${postId}`, {
    headers,
    method: 'POST',
    body: JSON.stringify({option: up ? 'upVote' : 'downVote'}) 
  })
  .then(res => res.json());
};

export const deletePost = (postId) => {
  return fetch(`${API}/posts/${postId}`, {
    headers,
    method: 'DELETE'
  })
  .then(res => res.json());
}

export const updatePost = (postId, title, body) => {
  return fetch(`${API}/posts/${postId}`, {
    headers,
    method: 'PUT',
    body: JSON.stringify({
      timestamp: new Date().getTime(),
      title,
      body
    }) 
  })
  .then(res => res.json());
};

export const addPost = (category, title, body) => {
  return fetch(`${API}/posts`, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      id: uuidv1(),
      timestamp: new Date().getTime(),
      category, 
      title,
      body,
      author: currentUserName
    }) 
  })
  .then(res => res.json());
};

export const deleteComment = (commentId) => {
  return fetch(`${API}/comments/${commentId}`, {
    headers,
    method: 'DELETE'
  })
  .then(res => res.json());
}

export const voteComment = (commentId, up) => {
  return fetch(`${API}/comments/${commentId}`, {
    headers,
    method: 'POST',
    body: JSON.stringify({option: up ? 'upVote' : 'downVote'}) 
  })
  .then(res => res.json());
};

export const addComment = (postId, body) => {
  return fetch(`${API}/comments`, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      id: uuidv1(),
      parentId: postId,
      timestamp: new Date().getTime(),
      body,
      author: currentUserName
    }) 
  })
  .then(res => res.json());
};

export const updateComment = (commentId, body) => {
  return fetch(`${API}/comments/${commentId}`, {
    headers,
    method: 'PUT',
    body: JSON.stringify({
      timestamp: new Date().getTime(),
      body
    }) 
  })
  .then(res => res.json());
};
