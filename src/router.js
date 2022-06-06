import { useRoutes } from "react-router-dom";
import Layout from './layout';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Team from "./pages/Team";

export default function Router () {
    return useRoutes ([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/home', element: <Home /> },
                { path: '/about', element: <About /> },
                { path: '/team', element: <Team /> },
                { path: '/contact', element: <Contact /> },
            ]
        }
    ])
}