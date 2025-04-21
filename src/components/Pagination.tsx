
function Pagination({totalItems, itemsPerPage, currentPage, onPageChange}){

    const totalPages = Math.ceil(totalItems / itemsPerPage)
    
    if(totalPages <= 1){
        return null;
    }

    const pages = Array.from({length: totalPages}, (_, i) => i + 1);

    return( 
        <div className = "pagination">
        {
            pages.map((page) => (
                <button 
                onClick = {() => onPageChange(page)}
                disabled ={page === currentPage}>
                   {page} 
                </button>
            ))
        }    
        </div>
    )
}


export default Pagination;