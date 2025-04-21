import { useEffect, useState } from "react";

const BASE_URL = 'https://openlibrary.org/search.json?q=';



function Books({posts}){

        return(
            <div className="tutorial">
            
                {posts.map((post) => {
                const coverId = post.cover_i;
                const imgSrc = coverId 
                    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg?default=false`
                       : "/placeholder.png";
                    return <div className="item">
                    {`Books name: ${post.title}`}
                    <br />  
                    {`Author's name: ${post.author_name}`}
                    <br />  
                    {`Publication year: ${post.first_publish_year}`}
                    <img src = {imgSrc} alt="book Image" />
                    </div>

                })}
            </div>
        )
}


export default Books
