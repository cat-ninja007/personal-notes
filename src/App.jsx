import React from "react";
import Navigation from "./components/Navigation";

import Homepage from "./pages/HomePage";
import AddNotePage from "./pages/AddNotePage";
import ArchivedNotePage from "./pages/ArchivedNotePage";
import DetailPageWrapper from "./pages/DetailPage";
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
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AddNotePage />} />
          <Route path="/archived" element={<ArchivedNotePage />} />
					<Route path="/notes/:id" element={<DetailPageWrapper />} />
        </Routes>
      </main>
		</div>
	);
}

export default App;
