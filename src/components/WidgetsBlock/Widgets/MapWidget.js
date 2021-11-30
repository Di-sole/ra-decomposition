import PropTypes from 'prop-types';
import shortid from 'shortid';

// отображает информацию на карте

function MapWidget(props) {
	const { data } = props;

	return (
		<ul className="map-list">
			{
				data.map(obj => 
					<li className="map-list-elem" key={shortid.generate()}>
						<p>{obj.name}</p>
					</li>)
			}
		</ul>
	)
}

MapWidget.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
}

export default MapWidget;