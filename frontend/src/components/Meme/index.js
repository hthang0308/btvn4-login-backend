import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Card from './Card';
import './index.css'
export default function Meme() {
	// const [images, setImages] = useState([]);
	// const [loading, setLoading] = useState(false);
	// const fetchImages = async () => {
	// 	setLoading(true);
	// 	const response = await fetch('https://api.imgflip.com/get_memes');
	// 	const data = await response.json();
	// 	setImages(data.data.memes);
	// 	setLoading(false);
	// };
	// useEffect(() => {
	// 	fetchImages();
	// }, []);

	// return (
	// 	<div className='container'>
	// 		<div >
	// 			<img className='logo' src="https://geology.hcmus.edu.vn/images/Logo/Logo_HCMUS.png" alt="logo" />
	// 			<h3>19120129 - Huỳnh Minh Thắng</h3>
	// 		</div>
	// 		<button style={{ fontSize: '2rem' }} onClick={fetchImages}>
	// 			Load Images
	// 		</button>
	// 		{loading ? (
	// 			<div>Loading...</div>
	// 		) : (
	// 			<div className="gallery">
	// 				{images.map((image) => (
	// 					<Card key={image.id} image={image.url} alt={image.name} />
	// 				))}
	// 			</div>
	// 		)}
	// 	</div>
	// );

	//use React Query
	const { data, isLoading, isError, error } = useQuery('memes', () =>
		fetch('https://api.imgflip.com/get_memes').then((res) => res.json())
	);
	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error: {error.message}</div>;
	return (
		<div className='container'>
			<div >
				<img className='logo' src="https://geology.hcmus.edu.vn/images/Logo/Logo_HCMUS.png" alt="logo" />
				<h3>19120129 - Huỳnh Minh Thắng</h3>
			</div>
			<div className="gallery">
				{data.data.memes.map((image) => (
					<Card key={image.id} image={image.url} alt={image.name} />
				))}
			</div>
		</div>
	);
}