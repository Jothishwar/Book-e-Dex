import React,{useState,useRef,useCallback} from 'react';
import Navbar from '../Components/Navbar';
import Card from './../Components/Card';
import { useInp } from '../InputContext';
import useBookSearch from './useBookSearch';
import notFoundImage from '../assets/no_books_found.svg'

function Home() {
  const [pageNumber, setPageNumber] = useState(0)

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
  console.log(books.length>0)
  return (
    <>
        <Navbar />
        <div className='hero'>
          <div className='cardcontainer'>
            {books.length>0 && 
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
            {books.length===0 && !loading && (
              <div className='emptyCart_container'>
                <img src={notFoundImage} alt='empty cart' className='emptyCart'/>
                <h4 className='empty-text'>No Books Found :-( </h4>
              </div>
            )}
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