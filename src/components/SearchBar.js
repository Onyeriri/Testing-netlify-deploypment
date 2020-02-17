import React from 'react';

class SearchBar extends React.Component {
	state = { text: '' };

	submit = e => {
		e.preventDefault();
		this.props.searchTerm(this.state.text);
	};

	render() {
		return (
			<div className='ui segment'>
				<form onSubmit={this.submit} className='ui form'>
					<div className='field'>
						<label htmlFor='pics'>Image search</label>
						<input
							value={this.state.text}
							type='text'
							id='pics'
							onChange={e => this.setState({ text: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
