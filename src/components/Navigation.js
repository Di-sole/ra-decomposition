/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import shortid from "shortid";

// отображает категории в навигационной панели

function Navigation(props) {
	const { categories } = props;

	return (
		<ul className="navigation-list">
			{
				categories.map((category) => 
					<li className="navigation-list-elem" key={shortid.generate()}>
						<a href="#">{category.name}</a>
					</li>)
			}
		</ul>
	)
}

Navigation.propTypes = {
	categories: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string
	}))
}

export default Navigation;