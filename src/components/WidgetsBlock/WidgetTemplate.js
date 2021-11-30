import PropTypes from 'prop-types';

// стилизует оформление виджетов

function WidgetTemplate(props) {
	const { title } = props;

	return (
		<div className="widget">
			<h5 className="widget-header">{title}</h5>
			<div className="widget-body">
				{props.children}
			</div>
		</div>
	)
}

WidgetTemplate.propTypes = {
	title: PropTypes.string
}

export default WidgetTemplate;