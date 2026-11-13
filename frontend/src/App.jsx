
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

import Home from './pages/Home'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'
import CreatePostPage from './pages/CreatePostPage'
import About from './pages/About'

function App() {
  return (
    <div>
      <Header />

      <div className="layout">
        <Sidebar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/create-post" element={<CreatePostPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
