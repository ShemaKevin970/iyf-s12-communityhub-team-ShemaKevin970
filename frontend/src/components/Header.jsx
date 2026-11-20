
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>CommunityHub</h1>

      <nav className={styles.nav}>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/posts">Posts</Link>
        <Link className={styles.link} to="/create-post">Create Post</Link>
        <Link className={styles.link} to="/about">About</Link>
      </nav>
    </header>
  )
}

export default Header
