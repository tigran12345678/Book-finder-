import { useState } from 'react'
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


  function switchMode(){
    if(lightAndDarkMode){
      setLightAndDarkMode(!lightAndDarkMode);
      document.body.style.backgroundColor = "grey";
    }
    else{
      setLightAndDarkMode(!lightAndDarkMode);
      document.body.style.backgroundColor = "#e1dcc5";
    }

  }


  return (
    <div id = "root" className={lightAndDarkMode ? 'light-mode' : 'dark-mode'}>
      <button onClick={switchMode} className='switchLightingMode'>🌙</button>
      <div className='heading'>
      <h1>Book Library</h1>
      <Input inputText={inputText} setText={setText} setPosts={setPosts}></Input>
      </div>
      <Books  posts={currentPosts}  darkMode={!lightAndDarkMode} ></Books>
      <Pagination 
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />

  </div>
   
  )
}

export default App
