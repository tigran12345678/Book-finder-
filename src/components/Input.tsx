    import { useEffect, useState } from "react";
    import Books from "./Books";
    const BASE_URL = 'https://openlibrary.org/search.json?q=';
    import { useDebounce } from "./Hooks";
    // import Pagination from "./Pagination";

    function Input({inputText, setText, setPosts, setCurrentPage}){


        
        const debouncedSearch = useDebounce(inputText);
        
            useEffect(() => {
                if(inputText.length !== 0){
                    fetch(BASE_URL + debouncedSearch).then((res) =>{
                        return res.json();
                    }).then((data) => {
                        if(!Array.isArray(data.docs) || data.docs.length === 0){
                            throw new Error("found nothing")
                        }
                        setCurrentPage(1);
                        setPosts(data.docs || []);
                    })
                    .catch((err) => {
                     alert("Fetch error" + err);
                        
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