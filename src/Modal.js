import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ItemImage from './ItemImage';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0',
  p: 4,
};

export default function ViewItemModal({ isOpen, onClose, item }) {
 
  if (item === null) {
    return <></>
  }


  return (
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Typography id="modal-modal-title" variant="h6" component="h2">
          {item.title}
          </Typography>

          <ItemImage item={item}></ItemImage>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {item.description.split('\n\n').map((par) => (
              <p>{par}</p>
            ))}
          </Typography>

        </Box>
      </Modal>
  );
}
