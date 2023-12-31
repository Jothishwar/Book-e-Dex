import React,{useEffect,useState} from 'react';
import './card.css';
import TransitionsModal from './TransitionsModal';

function Card({bookData,key}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);


  let thumbnail=bookData.volumeInfo.imageLinks && bookData.volumeInfo.imageLinks.smallThumbnail;
  let title=bookData.volumeInfo.title
  let author=bookData.volumeInfo.authors
  
  return (
    <>
    <div className='card' onClick={handleOpen}>
        <img src={thumbnail} 
          alt={title} 
          className={`coverimg ${isLoaded ? 'loaded' : ''} hvr-bob`}>
        </img>
        <div className='cardbody'>
            <h3>{title}</h3>
            <p>{author}</p>
        </div>
    </div>
    {open && (
      <TransitionsModal open={open} handleClose={handleClose} book={bookData} />
    )}
    </>
  )
}

export default Card