import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
	Outlet
} from "react-router-dom";


import './index.css';
import reportWebVitals from './reportWebVitals';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Logement from './pages/Logements/Logement';
import About from './pages/About/About';
import Error404 from './pages/Error404/Error404';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/logement/:id",
				element: <Logement />,
			},
				{
				path: "/about",
				element: <About />,
			},
			{
				path: "*",
				element: <Error404 />
			}
		]
	}
]);

function Layout() {
	return (
		<React.Fragment>
			<main>
				<Header />
				<Outlet />
			</main>
			<Footer />
		</React.Fragment>
	);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
