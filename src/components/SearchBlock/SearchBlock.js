import SearchBar from "./SearchBar";
import PropTypes from 'prop-types';

// блок с поисковой панелью

function SearchBlock(props) {
	const { logo, searchCategories } = props;

	return (
		<div className="search-block">
			<div className="main-logo-container">
				<img className="main-logo" src={logo} alt="logo" />
			</div>
			<SearchBar categories={searchCategories} />
		</div>
	)
}

SearchBlock.propTypes = {
	logo: PropTypes.string,
	searchCategories: PropTypes.array
}

export default SearchBlock;