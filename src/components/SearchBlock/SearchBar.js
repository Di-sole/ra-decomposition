import Navigation from "../Navigation";
import SearchBarForm from "./SearchBarForm";
import PropTypes from 'prop-types';

// поисковая панель

function SearchBar(props) {
	const { categories } = props;

	return (
		<div className="search-bar">
			<Navigation categories={categories} />
			<SearchBarForm>
				<div className="search-bar-form-description">
					<p className="description-text">Найдётся всё. Например, <span className="description-example">фаза луны сегодня</span></p>
				</div>
			</SearchBarForm>
		</div>
	)
}

SearchBar.propTypes = {
	categories: PropTypes.array
}

export default SearchBar;