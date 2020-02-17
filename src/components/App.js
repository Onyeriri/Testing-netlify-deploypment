import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../api/Unsplash';
import ImageList from './ImageList';

class App extends React.Component {
	state = { images: [] };

	onSubmitText = async term => {
		const response = await Unsplash.get('/search/photos', {
			params: { query: term }
		});

		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className='ui container' style={{ marginTop: '10px' }}>
				<SearchBar searchTerm={this.onSubmitText} />
				Found: {this.state.images.length} images
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
