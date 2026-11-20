
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.css'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2>Community Menu</h2>

      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} to="/posts">
            All Posts
          </Link>
        </li>

        <li className={styles.item}>
          <Link className={styles.link} to="/create-post">
            Create a Post
          </Link>
        </li>

        <li className={styles.item}>
          <Link className={styles.link} to="/about">
            About CommunityHub
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
