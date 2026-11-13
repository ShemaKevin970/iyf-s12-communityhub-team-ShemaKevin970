
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>CommunityHub</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/create-post">Create Post</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}

export default Header
