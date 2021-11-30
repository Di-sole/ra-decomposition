import PropTypes from 'prop-types';

// отображает список популярных тем

function Popular(props) {
	const { data } = props;

	return (
		<ul className="popular-list">
			{
				data.map(obj => 
					<li className="popular-list-elem">
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