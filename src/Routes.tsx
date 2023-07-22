import { createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Details from "./Pages/Details";
import NotFound from "./Pages/NotFound";

const Router = createBrowserRouter([
	{
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/details',
				element: <Details />
			},
			{
				path: '*',
				element: <NotFound />
			},
		]
	}
])

export default Router;