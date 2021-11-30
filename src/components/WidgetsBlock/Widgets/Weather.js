import PropTypes from 'prop-types';

// отображает текущую погоду

function Weather(props) {
	const { data } = props;

	return (
		<div className="weather-container">
			<img className="weather-icon" src={data.icon} alt="weather-icon"/>
			<span className="weather-value">{data.value}</span>
		</div>
	)
}

Weather.propTypes = {
	data: PropTypes.shape({
    icon: PropTypes.string,
    value: PropTypes.string
  }),
}

export default Weather;