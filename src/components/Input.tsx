    import { useEffect, useState } from "react";
    import Books from "./Books";
    const BASE_URL = 'https://openlibrary.org/search.json?q=';
    import { useDebounce } from "./Hooks";
    // const LIMIT_COUNT = 25

    function Input({inputText, setText, setPosts}){

        
        // function HandleInput(){
        //     const fetchPosts = async () => {
        //         const response = await fetch(BASE_URL + inputText ) //+'&limit=' + LIMIT_COUNT);
        //         const posts = await response.json();
        //         console.log(posts)
        //         setPosts(posts.docs);
        //     };
        //     fetchPosts();
        // }
     
        
        const debouncedSearch = useDebounce(inputText);
        
            useEffect(() => {
                if(inputText.length !== 0){
                    fetch(BASE_URL + debouncedSearch).then((res) =>{
                        return res.json();
                    }).then((data) => {
                        if(!Array.isArray(data.docs) || data.docs.length === 0){
                            throw new Error("found nothing")
                        }
                        setPosts(data.docs || []);
                    })
                    .catch((err) => {
                     alert("Fetch error" + err);
                        setPosts([]);
                    })
                }
            
    
            }, [debouncedSearch])
  

        return(
            <div className="input">
                <input type="text"  
                placeholder="Enter the Book" 
                className="book"
                value={inputText}
                onChange={e => setText(e.target.value)}
                />
                {/* <button onClick={HandleInput}>Submit</button> */}
            </div>
        )


    }


    export default Input;