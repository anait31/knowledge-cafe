import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmars, setBookmarks] = useState([]);
  const [readingTimes, setReadingTimes] = useState(0);

  const handleBookmarks = (title) => {
    const newBookmarks = [...bookmars, title];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='max-w-7xl mx-auto py-9 md:flex md:gap-5'>
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookmars={bookmars}></Bookmarks>
      </div>
    </>
  )
}

export default App
