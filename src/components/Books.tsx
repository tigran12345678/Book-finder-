import { useEffect, useState } from "react";

const BASE_URL = 'https://openlibrary.org/search.json?q=';



function Books({posts}){

    const [savedBooks, setBook] = useState([]);

        return(
            <div className="books">
               
                {posts.map((post) => {

                const authors = post.author_name || [];
                const displayAuthors = authors.slice(0, 2).join("").split(" ").slice(0, 2).join(" ") + (authors.length > 2 ? "..." : "");
                const coverId = post.cover_i;
                const imgSrc = coverId 
                    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg?default=false`
                       : "";
                    return <div className="item">
                    <div className="bookInfo">
                    {`Books name: ${post.title}`}
                    <br />  
                    {`Author's name: ${displayAuthors}`}
                    <br />  
                    {`Publication year: ${post.first_publish_year}`}
                    </div>
                  
                    <img src = {imgSrc} alt="book Image" />
                    <br />
                    <button onClick={() => {
                      const newSaved = [...savedBooks, post.title];
                      setBook(newSaved);
                      localStorage.setItem("favoriteBooks", JSON.stringify(newSaved));
                      alert(`"${post.title}" saved!`);
                     }}> Save to favorite </button>
                    </div>

                })}
            </div>
        )

    }

export default Books
