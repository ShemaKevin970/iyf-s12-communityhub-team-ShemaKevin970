
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import PostList from './components/PostList'
import CreatePost from './components/CreatePost'

function App() {
  const [posts, setPosts] = useState([])

  function addPost(newPost) {
    setPosts((previousPosts) => [...previousPosts, newPost])
  }

  return (
    <div>
      <Header />

      <div className="layout">
        <Sidebar />

        <main>
          <h2>Welcome to CommunityHub</h2>
          <p>Your community, your voice, your space.</p>

          <CreatePost onAddPost={addPost} />

          <PostList posts={posts} />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
