import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const LIMIT = 10;

const Pagination = () => {

    const [ currentPage, setCurrentPage ] = useState(0);
    const [ products, setProducts ] = useState([])
    const [noOfPages, setNoOfPages] = useState(0);
    // page 0 - skip 0
    // page 1 - skip 10
    // page 2 - skip 20

    const fetchProducts = async () => {
        const data = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage+LIMIT}&select=title,price,thumbnail,description,discountPercentage`);
        const json = await data.json();
        
        setProducts(json.products)
        setNoOfPages(Math.ceil(json.total / LIMIT));  // Ensure integer value
    }

    useEffect(()=>{
        fetchProducts();
    },[currentPage])

  return (
    <div>
      <div className="flex flex-wrap">
        { products.map((product,index)=>(
            <ProductCard key={index} data={product}/>
        ))}
      </div>
      <div className="p-10 cursor-pointer">
        { currentPage > 0 && (<span 
            onClick={()=> {setCurrentPage((currentPage)=>currentPage-1)}}
        >
            Prev
        </span>)}
        {[...Array(noOfPages).keys()].map((p,index)=>(
            <span 
                className={"text-xl p-4 " + ( p===currentPage && "font-bold underline")} 
                key={index}
                onClick={()=> { setCurrentPage(p)}}
            >
                {p}
            </span>
        ))}
        { currentPage < noOfPages-1 && (<span onClick={()=> {setCurrentPage((currentPage)=>currentPage+1)}} >Next</span>)}
      </div>
    </div>
  )
}

export default Pagination
 