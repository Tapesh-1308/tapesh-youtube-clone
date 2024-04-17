import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Feed from "./pages/Feed.jsx";
import VideoDetails from "./pages/VideoDetails.jsx";
import SearchResults from "./pages/SearchResult.jsx";

import "./index.css";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import { ContextProvider } from "./context/FeedContext.jsx";
import ChannelDetails from "./pages/ChannelDetails.jsx";
import LiveChatContextProvider from "./context/LiveChatContext.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Feed />} />
			<Route path="/video/:videoId" element={<LiveChatContextProvider><VideoDetails /></LiveChatContextProvider>} />
			<Route path="/channel/:channelId" element={<ChannelDetails />} />
			<Route path="search/:searchTerm" element={<SearchResults />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			
				<RouterProvider router={router}>
					<App />
				</RouterProvider>
			
		</ContextProvider>
	</React.StrictMode>
);
