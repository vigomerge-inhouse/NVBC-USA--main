import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import TheBrittany from "./pages/TheBrittany";
import Events from "./pages/Events";
import Awards from "./pages/Awards";
import Gallery from "./pages/Gallery";
import BecomeMember from "./pages/BecomeMember";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-nvbc", element: <About /> },
      { path: "why-a-brittany", element: <TheBrittany /> },
      { path: "calendar", element: <Events /> },
      { path: "awards", element: <Awards /> },
      { path: "gallery", element: <Gallery /> },
      { path: "become-a-member", element: <BecomeMember /> },
      { path: "contact", element: <Contact /> },
      { path: "resources", element: <Resources /> },
    ],
  },
]);