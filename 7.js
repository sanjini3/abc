function fetchUser() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ userId: 1, username: 'john_doe' }), 1000); // Simulated user data
    });
  }
  
  function fetchPosts(userId) {
    return new Promise((resolve) => {
      setTimeout(() => resolve([{ postId: 101, title: 'First Post' }, { postId: 102, title: 'Second Post' }]), 1000); // Simulated posts data
    });
  }
  
  function fetchComments(postId) {
    return new Promise((resolve) => {
      setTimeout(() => resolve([{ commentId: 1, content: 'Great post!' }, { commentId: 2, content: 'Interesting!' }]), 1000); // Simulated comments data
    });
  }
  
  // Chaining the promises
  fetchUser()
    .then(user => {
      console.log('User:', user.username);
      return fetchPosts(user.userId);
    })
    .then(posts => {
      console.log('Posts:', posts);
      return fetchComments(posts[0].postId); // Fetching comments for the first post
    })
    .then(comments => {
      console.log('Comments:', comments);
    })
    .catch(error => console.log(error));
  