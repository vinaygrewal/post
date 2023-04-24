import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import './App.css'; // import the CSS file

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.posts))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container maxWidth="sm" className="container"> {/* add the 'container' class */}
      <Typography variant="h2" component="h1" className="heading"> POSTS</Typography> {/* add the 'heading' class */}
      <List>
        {posts.map(post => (
          <ListItem key={post.id} className="list-item"> {/* add the 'list-item' class */}
            <ListItemText
              primary={post.title}
              secondary={post.body}
              className="list-item-text" // add the 'list-item-text' class
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="h5" component="h1" className="heading"> Made by Vinay-Grewal</Typography> 
       </Container>
  );
}

export default App;




