import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import * as React from 'react';
import ViewItemModal from './Modal';
import { Box, Chip, Container, Divider, Paper } from '@mui/material';
import ItemImage from './ItemImage';

export default function StandardImageList({ items, onItemClick }) {

	return (
		<Container>

			<Divider>
				<Chip label="ITEMS" />
			</Divider>
			
            <ImageList justify="center" alignItems="center" cols={8} rowHeight={60}>
				{items.map((item, i) => (
					<ImageListItem key={`item-${i}`} onClick={() => onItemClick(item)}>
						<ItemImage item={item}></ItemImage>
					</ImageListItem>
				))}
			</ImageList>
		</Container>
	);
}
