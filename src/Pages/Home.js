import React,{useState,useRef,useCallback} from 'react';
import Navbar from '../Components/Navbar';
import Card from './../Components/Card';
import { useInp } from '../InputContext';
import useBookSearch from './useBookSearch';
// import axios from 'axios';

function Home() {
  const [pageNumber, setPageNumber] = useState(0)
  // const [bookData,setBookData]=React.useState([])
  const search=useInp();

  const {
    books,
    hasMore,
    loading,
  } = useBookSearch(search, pageNumber)

  const observer = useRef()
  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber +40 )
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])
  
  return (
    <>
        <Navbar />
        <div className='hero'>
          <div className='cardcontainer'>
            {
              books.map((item,index)=>{
                if (books.length === index + 1){
                  return (
                    <div ref={lastBookElementRef} key={item.etag}>
                      <Card bookData={item} />
                    </div>
                  )
                }
                return (
                <div key={item.etag}>
                  <Card bookData={item} />
                </div>
                )
              })
            }
          </div>
          <div className='loader-container'>{loading && (
            <span className="loader"></span>
          )}
          </div>
        </div>
    </>
  )
}

export default Home;