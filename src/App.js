import './App.css';

import { Box, Chip, Container, Divider, Paper } from '@mui/material';
import * as React from 'react';
import ViewItemModal from './Modal';
import Navbar from './Navbar';
import Items from './items.json';
import ItemContainer from './ItemContainer';

function App() {
	
	const [ currentItem, setCurrentItem ] = React.useState(null);


	const closeModal = () => {
		setCurrentItem(null);
	};

	const handleItemClick = (item) => {
		setCurrentItem(item);
	};

// 	const lorem = (
// 		<p onClick={openModal}>
// 			{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
//    Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
//    Sed malesuada lobortis pretium.`}
// 		</p>
// 	);

	return (
		<Box>
			<Container sx={{
				paddingBottom: '60px'
			}}>

				<ViewItemModal isOpen={currentItem !== null} onClose={closeModal} item={currentItem} />
							
				<ItemContainer items={Items} onItemClick={handleItemClick}></ItemContainer>
			
			</Container>

			<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} >
				<Navbar />
			</Paper>
		</Box>
	);
}

export default App;
