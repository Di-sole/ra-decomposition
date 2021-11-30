import PropTypes from 'prop-types';
import shortid from 'shortid';

// отображает список новостей

function NewsList(props) {
	const { news } = props;

	return (
		<ul className="news-list">
			{
				news.map((obj) => 
					<li className="news-list-elem" key={shortid.generate()}>
						<img className="news-icon" src={obj.img} alt="icon"/>
						<p className="news-title"><a href={obj.link}>{obj.title}</a></p>
					</li>)
			}
		</ul>
	)
}

NewsList.propTypes = {
	news: PropTypes.arrayOf(
		PropTypes.shape({
			img: PropTypes.string,
			title: PropTypes.string,
			link: PropTypes.string
	}))
}

export default NewsList;