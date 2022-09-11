import './App.css';

import { Box, Container, Paper } from '@mui/material';
import * as React from 'react';
import ItemContainer from './ItemContainer';
import Items from './items.json';
import ViewItemModal from './Modal';
import Navbar from './Navbar';

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

	const searchItems = Items.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()));

	return (
		<Container>
			<h1
				style={{
					textAlign: 'center',
					marginBottom: '0'
				}}
			>
				Isaac Lexicon
			</h1>

			<Box
				sx={{
					paddingBottom: '60px',
					paddingTop: '25px'
				}}
			>
				<ViewItemModal isOpen={currentItem !== null} onClose={closeModal} item={currentItem} />

				<ItemContainer
					items={searchItems.filter((item) => item.tags.includes('item'))}
					onItemClick={handleItemClick}
					title="ITEMS"
				/>

				<ItemContainer
					items={searchItems.filter((item) => item.tags.includes('trinket'))}
					onItemClick={handleItemClick}
					title="TRINKETS"
				/>

				<ItemContainer
					items={searchItems.filter((item) => item.tags.includes('consumable'))}
					onItemClick={handleItemClick}
					title="CONSUMABLES"
				/>
			</Box>

			<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
				<Navbar onSearchChange={handleSearch} />
			</Paper>
		</Container>
	);
}

export default App;
