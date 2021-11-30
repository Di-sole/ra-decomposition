// выводит текущее время

function DateWidget() {
	const date = new Date().toLocaleString();

	return (
		<div className="date-widget">
			{date}
		</div>
	)
}

export default DateWidget;