import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<h1>Well hello there!</h1>} />
				<Route path="/cat" element={<h1>We would love to display a cat!</h1>} />
			</Routes>
		</>
	);
}

export default App;
