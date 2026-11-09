
import { createPost } from '../utils/postUtils'

function CreatePost({ onAddPost }) {
  function handleSubmit(event) {
    event.preventDefault()

    const title = event.target.title.value
    const content = event.target.content.value

    const newPost = createPost(title, content)

    if (!newPost) {
      return
    }

    onAddPost(newPost)
    event.target.reset()
  }

  return (
    <section>
      <h2>Create a Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Post title"
          required
        />

        <textarea
          name="content"
          placeholder="What's on your mind?"
          required
        />

        <button type="submit">Publish Post</button>
      </form>
    </section>
  )
}

export default CreatePost
