import "./App.css";
import Loader from "./Components/Loader/Loader";
import ThreeDotsLoader from "./Components/ThreeDotsLoader/ThreeDotsLoader";

function App() {
	return (
		<div className="app">
			<div className="app__grid">
				<div className="app__grid__item">
					<Loader />
				</div>
				<div className="app__grid__item">
					<ThreeDotsLoader />
				</div>
			</div>
		</div>
	);
}

export default App;
