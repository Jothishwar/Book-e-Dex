import React from 'react';
import Navbar from '../Components/Navbar';
import Card from './../Components/Card';
import { useInp } from '../InputContext';
import axios from 'axios';

function Home() {
  const [bookData,setBookData]=React.useState([])
  const search=useInp();

  React.useEffect(()=>{
    const getData=async ()=>{
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search===''?'lord of the rings':search}&maxResults=20&filter=paid-ebooks`).then(
        res => {setBookData([...res.data.items])}
      ).catch(
        err=>console.log(err)
      )
    }
    getData();
  },[search]);
  console.log(bookData);
  return (
    <>
        <Navbar />
        <div className='hero'>
          <div className='cardcontainer'>
            {
              bookData.map((item)=>{
                if (item.volumeInfo.authors === undefined || item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail=== undefined){
                  return null;
                }
                return (
                <Card 
                  key={item.id} 
                  btitle={item.volumeInfo.title} 
                  bcover={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail} 
                  bauthors={item.volumeInfo.authors.join(',')}
                />
                )
              })
            }
          </div>
        </div>
    </>
  )
}

export default Home;