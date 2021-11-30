import './App.css';
import NewsBlock from './components/NewsBlock/NewsBlock';
import SearchBlock from './components/SearchBlock/SearchBlock';
import WidgetsBlock from './components/WidgetsBlock/WidgetsBlock';
import Advertising from './components/Advertising';

import * as data from './components/data';

function App() {
  return (
    <div className="App">
			<header>
				<NewsBlock 
					newsCategories={data.newsCategories} 
					news={data.news} 
					currencies={data.currencies}
				/>
				<Advertising img="http://placehold.it/80x80/" link="http://placehold.it/80x80/">
					<h5 className="advertising-title">Работа над ошибками</h5>
					<p className="advertising-text">Смотрите на Яндексе и запоминайте</p>
				</Advertising>
			</header>
			<main>
				<SearchBlock 
					logo="http://placehold.it/40x40/"
					searchCategories={data.searchCategories}
				/>
				<Advertising img="http://placehold.it/600x60/" link="http://placehold.it/600x60/" />
				<WidgetsBlock 
					weather={data.weather}
					popular={data.popular} 
					mapData={data.germanyMapData}
					program={data.program} 
					broadcast={data.broadcast}
				/>
			</main>
    </div>
  );
}

export default App;
