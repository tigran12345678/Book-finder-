    import { useState } from "react";
    import Books from "./Books";
    const BASE_URL = 'https://openlibrary.org/search.json?q=';
    const LIMIT_COUNT = 25

    function Input({inputText, setText, setPosts}){

        
        function HandleInput(){
            const fetchPosts = async () => {
                const response = await fetch(BASE_URL + inputText +'&limit=' + LIMIT_COUNT);
                const posts = await response.json();
                console.log(posts)
                setPosts(posts.docs);
            };
            fetchPosts();
        }

        return(
            <div>
                <input type="text"  
                placeholder="Enter the Book" 
                className="book"
                value={inputText}
                onChange={e => setText(e.target.value)}
                />
                <button onClick={HandleInput}>Submit</button>
            </div>
        )


    }


    export default Input;