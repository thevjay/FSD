import { useEffect, useState } from 'react';

const SearchUI = () => {

    const [ searchText , setSearchText ] = useState('');
    const [ searchData, setSearchData ] =  useState([]);
    const [ isResultVisible, setIsResultVisible] = useState(false)
    const [ cache, setCache ] = useState({})

    useEffect(()=>{
        // Debouncing  - am delaying api call  await 200ms and suppose in bewteen another key stroke happen useEffect call another setTimer is create prev setTimeout is clear
        const s = setTimeout(()=>{
            fectData();
        },200);

        return () => clearTimeout(s);

    },[searchText]);

    const fectData = async() =>{

        // If Cache has data , send data from here
        if(cache[searchText]){
            setSearchData(cache[searchText])
        } else{
            // If Cache doesn't have data make api call and update the Cache
            const data = await fetch('https://www.google.com/complete/search?client=firefox&q='+searchText)
            const json = await data.json()
            cache[searchText] = json[1];
            setSearchData(json[1]);
        }
        
    }

  return (
    <div className='m-10 '>
        <input 
            type="text" 
            className='border border-black p-2 w-96 shadow-md'
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)} 
            onFocus={()=>setIsResultVisible(true)}
            onBlur={()=>setIsResultVisible(false)}
        />
        { searchData.length > 1 && isResultVisible && (<ul className='p-2  border border-black w-96 shadow-md'>
            {searchData.map((data,i)=>(
                <li className='hover:bg-gray-200 cursor-pointer' key={i}>{data}</li>
            ))}
           
        </ul>)}
    </div>
  )
}

export default SearchUI
