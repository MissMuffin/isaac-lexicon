import './App.css';

import { Box, Chip, Container, Divider, Paper } from '@mui/material';
import * as React from 'react';
import ViewItemModal from './Modal';
import Navbar from './Navbar';
import Items from './items.json';
import ItemContainer from './ItemContainer';

function App() {
	
	const [ currentItem, setCurrentItem ] = React.useState(null);
	const [ searchInput, setSearchInput ] = React.useState('');


	const closeModal = () => {
		setCurrentItem(null);
	};

	const handleItemClick = (item) => {
		setCurrentItem(item);
	};

	const handleSearch = (text) => {
		console.log(text);
		setSearchInput(text);
	};


	return (
		<Box>
			<Container sx={{
				paddingBottom: '60px'
			}}>

				<ViewItemModal isOpen={currentItem !== null} onClose={closeModal} item={currentItem} />
							
				<ItemContainer items={Items.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()))} onItemClick={handleItemClick}></ItemContainer>
			
			</Container>

			<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} >
				<Navbar onSearchChange={handleSearch}/>
			</Paper>
		</Box>
	);
}

export default App;
