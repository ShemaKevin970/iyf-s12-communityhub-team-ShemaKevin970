
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.page}>
      <h1>Welcome to CommunityHub</h1>

      <p>
        Your community, your voice, your space.
        Connect with people, share ideas, and discover
        what is happening in your community.
      </p>

      <div className={styles.actions}>
        <Link to="/posts">Explore Posts</Link>
        <Link to="/create-post">Create a Post</Link>
      </div>
    </section>
  )
}

export default Home
