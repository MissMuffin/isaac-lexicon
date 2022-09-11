import './App.css';

import {
  Box,
  Chip,
  Container,
  Divider,
  Paper
} from '@mui/material';
import * as React from 'react';
import ViewItemModal from './Modal';
import Navbar from './Navbar';

function App() {
	const openModal = () => {
    setOpenViewItemModal(true);
  };

  const closeModal = () => {
    setOpenViewItemModal(false);
  };

	const [ openViewItemModal, setOpenViewItemModal ] = React.useState(false);
	// const []
	const [ value, setValue ] = React.useState(0);

	const lorem = (
		<p onClick={openModal}>
			{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
		</p>
	);

	return (
		<Box>
			<Container maxWidth="sm">
				<ViewItemModal isOpen={openViewItemModal} onClose={closeModal} itemText={'Hello world'} />

				{lorem}

				<Divider>TEST</Divider>

				{lorem}

				<Divider>
					<Chip label="BJHK" />
				</Divider>
			</Container>

			<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
				<Navbar />
			</Paper>
		</Box>
	);
}

export default App;
