
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import useLocalStorage from '../hooks/useLocalStorage'

const englishPosts = [
  {
    id: 1,
    title: 'Welcome to Our CommunityHub',
    body: 'Welcome everyone! This is a space where we can share ideas, ask questions, exchange experiences, and support one another. Feel free to introduce yourself.',
  },
  {
    id: 2,
    title: 'Supporting Local Businesses',
    body: 'Let us support small businesses in our community. Share information about local shops, services, and entrepreneurs that deserve more recognition.',
  },
  {
    id: 3,
    title: 'Technology and Digital Skills',
    body: 'Technology is creating new opportunities for learning and employment. What digital skills are you currently learning, and what resources would you recommend?',
  },
  {
    id: 4,
    title: 'Education and Learning Opportunities',
    body: 'Learning does not stop after school. Share information about scholarships, online courses, training programmes, and other educational opportunities.',
  },
  {
    id: 5,
    title: 'Making Our Neighbourhood Better',
    body: 'What improvements would you like to see in your neighbourhood? Let us discuss cleanliness, security, roads, community activities, and ways to help one another.',
  },
  {
    id: 6,
    title: 'Share Your Ideas and Experiences',
    body: 'Everyone has something valuable to contribute. Tell us about a recent experience, a lesson you learned, or an idea that could benefit others.',
  },
]

function Posts() {
  const { loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  )

  const [createdPosts] = useLocalStorage('community-posts', [])

  if (loading) {
    return <p>Loading community posts...</p>
  }

  if (error) {
    return <p role="alert">Error: {error}</p>
  }

  return (
    <section className="page">
      <h1>Community Posts</h1>

      {englishPosts.map((post) => (
        <article className="post-card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>

          <Link to={`/posts/${post.id}`}>
            Read More
          </Link>
        </article>
      ))}

      {createdPosts.map((post) => (
        <article className="post-card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>

          <Link to={`/posts/${post.id}`}>
            Read More
          </Link>
        </article>
      ))}
    </section>
  )
}

export default Posts
