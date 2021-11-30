import PropTypes from 'prop-types';
import shortid from 'shortid';

// отображает телепрограмму

function TvProgram(props) {
	const { data } = props;

	return (
		<ul className="program-list">
			{
				data.map(obj => 
					<li className="program-list-elem" key={shortid.generate()}>
						<p className="program-time">{obj.time}</p>
						<p className="program-name">{obj.name}</p>
						<p className="tv-channel">{obj.channel}</p>
					</li>)
			}
		</ul>
	)
}

TvProgram.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string,
		name: PropTypes.string,
		channel: PropTypes.string
  })),
}

export default TvProgram;