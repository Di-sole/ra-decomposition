import PropTypes from 'prop-types';
import shortid from 'shortid';

// отображает список популярных тем

function Popular(props) {
	const { data } = props;

	return (
		<ul className="popular-list">
			{
				data.map(obj => 
					<li className="popular-list-elem" key={shortid.generate()}>
						<p><span className="popular-title">{obj.title}</span> - {obj.text}</p>
					</li>)
			}
		</ul>
	)
}

Popular.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
		text: PropTypes.string
  })),
}

export default Popular;