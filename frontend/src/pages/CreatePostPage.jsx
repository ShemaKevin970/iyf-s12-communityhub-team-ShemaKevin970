
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'

function CreatePostPage() {
  const [posts, setPosts] = useLocalStorage('community-posts', [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim() || !body.trim()) {
      return
    }

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      body: body.trim(),
    }

    setPosts((previousPosts) => [...previousPosts, newPost])

    setTitle('')
    setBody('')

    navigate('/posts')
  }

  return (
    <section className="page">
      <h1>Create a Post</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="post-title">Post Title</label>
        <input
          id="post-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter your post title"
          required
        />

        <label htmlFor="post-body">Post Content</label>
        <textarea
          id="post-body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="Write your post here"
          required
        />

        <button type="submit">Publish Post</button>
      </form>

      <p>Total posts created: {posts.length}</p>
    </section>
  )
}

export default CreatePostPage
