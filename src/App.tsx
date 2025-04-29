import { useEffect, useState } from 'react'
import Input from './components/Input'
import './App.less'
import Books from './components/Books'
import Pagination from './components/Pagination';


function App() {
 
  const [inputText, setText] = useState("");
  const [posts, setPosts] = useState([]);
  const [lightAndDarkMode, setLightAndDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);


  function switchMode() {
    setLightAndDarkMode(prev => {
      const newMode = !prev;
      document.body.classList.toggle('light-mode', newMode);
      document.body.classList.toggle('dark-mode', !newMode);
      return newMode;
    });
  }

  useEffect(() => {
    document.body.classList.add(lightAndDarkMode ? "light-mode": "dark-mnide")
  }, [lightAndDarkMode])

  return (
    <div id = "root">
      <button onClick={switchMode} className='switchLightingMode'>🌙</button>
      <div className='heading'>
      <h1>Book Library</h1>
      <Input inputText={inputText} setText={setText} setPosts={setPosts} setCurrentPage={setCurrentPage}></Input>
      </div>
      <Books  posts={currentPosts}  ></Books>
      <Pagination 
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />

  </div>
   
  )
}

export default App
