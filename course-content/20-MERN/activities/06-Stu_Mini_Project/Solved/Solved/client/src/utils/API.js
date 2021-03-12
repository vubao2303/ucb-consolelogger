import axios from "axios";


// client side sending this to the server side 
export default {
  // Gets all posts
  // make this call to API 
  getPosts: function() {
    // thsi one API google 
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
    // this go to line 9 in post.js 
  }
};

// ?
// API query google

