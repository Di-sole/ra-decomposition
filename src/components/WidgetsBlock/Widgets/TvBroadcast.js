import PropTypes from 'prop-types';

// отображает список программ в эфире

function TvBroadcast(props) {
	const { data } = props;

	return (
		<ul className="broadcast-list">
			{
				data.map(obj => 
					<li className="broadcast-list-elem">
						<p className="program-name">{obj.name}</p>
						<p className="tv-channel">{obj.channel}</p>
					</li>)
			}
		</ul>
	)
}

TvBroadcast.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
		channel: PropTypes.string
  })),
}

export default TvBroadcast;