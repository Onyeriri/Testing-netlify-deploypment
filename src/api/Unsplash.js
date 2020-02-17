import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID a0101c9677c67c1b9952574e27448689362ee6ffafc7c40947f12b6987ceff5a'
	}
});
