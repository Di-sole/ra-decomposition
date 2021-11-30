import PropTypes from 'prop-types';
import shortid from 'shortid';

// отображает курсы валют

function Currencies(props) {
	const { currencies } = props;

	return (
		<div className="currencies">
			<ul className="currencies-list">
				{
					currencies.map((obj) => 
						<li className="currencies-list-elem" key={shortid.generate()}>
							<p className="currency-name">{obj.name}</p>
							<p className="currency-rate">{obj.rate}</p>
							<p className="rate-difference">{obj.difference}</p>
						</li>)
				}
			</ul>
		</div>
	)
}

Currencies.propTypes = {
	currencies: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			rate: PropTypes.string,
			difference: PropTypes.string
	}))
}

export default Currencies;