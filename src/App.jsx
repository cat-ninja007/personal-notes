import React from "react";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AddNotePage from "./pages/AddNotePage";
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="app-container">
			<header>
				<h1>Personal Notes</h1>
				<Navigation />
			</header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AddNotePage />} />
        </Routes>
      </main>
		</div>
	);
}

export default App;
