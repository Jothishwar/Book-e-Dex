import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import './Cartitem.css';
import {useCart,useNewCart} from '../CartContext';

export default function CartItem({bookData,id}) {
  const cartItems=useCart()
  const updateCart=useNewCart()

  const handleDelete=(e)=>{
    delete cartItems[e.target.value]
    updateCart(cartItems)
    // console.log(cartItems,newval)
  }

  return (
    <Card sx={{ display: "flex" }} className="cartitemcard">
      <CardMedia
        component="img"
        sx={{ height: 150,width:'auto' }}
        image={bookData['volumeInfo']['imageLinks']['smallThumbnail']}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection:"column" }}>
        <CardContent sx={{ flex: "1 1 auto" }} className="cardcontent">
          <h4>
            {bookData['volumeInfo']['title']}
          </h4>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            ₹ {bookData['saleInfo']['listPrice']['amount']}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
            className="bookText"
          >
            {bookData['volumeInfo']['description']}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }} className='action-area' >
          <IconButton aria-label="save for later" className="saveforlater">
            <FavoriteIcon fontSize="small" /> Save For later
          </IconButton>
          <IconButton aria-label="delete" value={id} className="del" onClick={handleDelete} >
            <DeleteIcon fontSize="small" /> Delete
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
