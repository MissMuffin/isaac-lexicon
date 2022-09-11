export default function ItemImage({ item }) {
	return (
    <span
		style={{
			backgroundImage: `url(${item.img.src})`,
			backgroundPosition: `${item.img.x} 0`,
			width: item.img.width,
			height: '50px',
			display: 'block',
            cursor: 'pointer'
		}}
	/>);
}
