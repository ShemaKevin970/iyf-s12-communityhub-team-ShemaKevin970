
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside>
      <h2>Community Menu</h2>

      <ul>
        <li>
          <Link to="/posts">All Posts</Link>
        </li>
        <li>
          <Link to="/create-post">Create a Post</Link>
        </li>
        <li>
          <Link to="/about">About CommunityHub</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
