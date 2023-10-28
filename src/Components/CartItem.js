import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function CartItem() {

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="http://books.google.com/books/content?id=jNjKrXRP0G8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection:"column" }}>
        <CardContent sx={{ flex: "1 1 auto" }}>
          <Typography component="div" variant="h5">
            {"Picturing Tolkien"}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {"Rs.500"}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {"Each of the sixteen essays includes extensive notes and a separate bibliography. Instructors considering this book for use in a course may request an examination copy here."}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <FavoriteIcon /> Save For later
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon /> Delete
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
