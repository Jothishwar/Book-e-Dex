import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';
import Modal from '@mui/base/Modal';
import Fade from '@mui/material/Fade';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import {CartContext} from '../CartContext';
import { duration } from '@mui/material';
import './modal.css';


const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return (
    <Fade in={open}>
      <div ref={ref} {...other} />
    </Fade>
  );
});

Backdrop.propTypes = {
  open: PropTypes.bool,
};

const blue = {
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  flex-direction:column,
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  position:'absolute',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  width: 500,
  top:'20%',
  borderRadius: '15px',
  padding: '16px 32px 24px 32px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});

export default function TransitionsModal({open,handleClose,book}) {
    // console.log(open)
    let thumbnail=book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
    let title=book.volumeInfo.title
    let author=book.volumeInfo.authors
    let desc=book.volumeInfo.description
    let amount=book.saleInfo.listPrice && book.saleInfo.listPrice.amount
    const {addToCart}=useContext(CartContext)

    return (
      <div>
        <StyledModal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: StyledBackdrop }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div className='modal-header'>
                <img src={thumbnail} alt={title}></img>
                <div className='modal-header-right'>
                  <h2 id="transition-modal-title">{title}</h2>
                  <span>{author}</span>
                  <h3 className='amount'>₹ {amount}</h3>
                  <Button variant="contained" color="success" onClick={addToCart}>
                    Add to Cart &nbsp;
                    <ShoppingCartIcon />
                  </Button>
                </div>
              </div>
              <div className='modal-content'>
                <p id="transition-modal-description" style={{ marginTop: 16 }}>
                    {desc}
                </p>
              </div>
            </Box>
          </Fade>
        </StyledModal>
      </div>
    );
}