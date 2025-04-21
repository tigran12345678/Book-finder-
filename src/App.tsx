import { useState } from 'react'
import Input from './components/Input'
import Pagination from './components/Pagination'
import './App.css'
import Books from './components/Books'

function App() {
 
  const [inputText, setText] = useState("");
  const [posts, setPosts] = useState([]);
  const [lightAndDarkMode, setLightAndDarkMode] = useState(true);

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
    <>
      <button onClick={switchMode}>Switch to dark mode</button>
      <h1>Book Library</h1>
      <Input inputText={inputText} setText={setText} setPosts={setPosts}></Input>
      <Books  posts={posts}></Books>
      <Pagination
        totalItems={numFound}
        itemsPerPage={LIMIT_COUNT}
        currentPage={page}
        onPageChange={setPage}
      />
    </>
  )
}

export default App
