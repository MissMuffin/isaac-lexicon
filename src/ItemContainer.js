import './ItemContainer.css';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import * as React from 'react';
import ViewItemModal from './Modal';
import { Box, Chip, Container, Divider, Paper } from '@mui/material';
import ItemImage from './ItemImage';

export default function StandardImageList({ items, onItemClick, title }) {
	return (
		<Box
			style={{
				paddingBottom: '30px'
			}}
		>
			<Divider
				style={{
					paddingBottom: '20px'
				}}
			>
				<Chip label={title} />
			</Divider>

			<ul className="item-image-grid">
				{items.map((item, i) => (
					<li className="item" key={`item-${i}`} onClick={() => onItemClick(item)}>
						<ItemImage item={item} />
					</li>
				))}
			</ul>
		</Box>
	);
}
