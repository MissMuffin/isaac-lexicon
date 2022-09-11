import './ItemContainer.css';

import { Box, Chip, Divider } from '@mui/material';
import * as React from 'react';
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
