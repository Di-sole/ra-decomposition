// форма поиска в поисковой панели

function SearchBarForm(props) {
	return(
		<>
			<form className="form search-bar-form">
				<input className="input search-bar-input" id="search" name="search" />
				<button className="btn search-btn">Найти</button>
			</form>
			{props.children}
		</>
	)
}

export default SearchBarForm;