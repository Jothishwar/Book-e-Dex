import React from 'react';
import './card.css';

function Card({bookData,key}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  let thumbnail=bookData.volumeInfo.imageLinks && bookData.volumeInfo.imageLinks.smallThumbnail;
  let title=bookData.volumeInfo.title
  let author=bookData.volumeInfo.authors
  return (
    <div className='card'>
        <img src={thumbnail} alt={title} className='coverimg hvr-bob'></img>
        <div className='cardbody'>
            <h3>{title}</h3>
            <p>{author}</p>
        </div>
    </div>
  )
}

export default Card