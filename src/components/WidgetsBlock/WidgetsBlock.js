import WidgetTemplate from "./WidgetTemplate";
import Weather from "./Widgets/Weather";
import Popular from "./Widgets/Popular";
import MapWidget from "./Widgets/MapWidget";
import TvProgram from "./Widgets/TvProgram";
import TvBroadcast from "./Widgets/TvBroadcast";

// блок с виджетами

function WidgetsBlock(props) {
	const { weather, popular, mapData, program, broadcast } = props;

	return (
		<div className="widgets-block">
			<WidgetTemplate title="Погода">
				<Weather data={weather} />
			</WidgetTemplate>

			<WidgetTemplate title="Посещаемое">
				<Popular data={popular} />
			</WidgetTemplate>
			
			<WidgetTemplate title="Карта Германии">
				<MapWidget data={mapData} />
			</WidgetTemplate>
			
			<WidgetTemplate title="Телепрограмма">
				<TvProgram data={program} />
			</WidgetTemplate>
			
			<WidgetTemplate title="Эфир">
				<TvBroadcast data={broadcast} />
			</WidgetTemplate>
		</div>
	)
}

export default WidgetsBlock;