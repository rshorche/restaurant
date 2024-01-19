import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import About from "./Components/About/About";
import OrderOnline from "./Components/OrderOnline/OrderOnline";
import Reservation from "./Components/Reservation/Reservation";
import Contact from "./Components/Contact/Contact";
import NoteFound from "./Components/NoteFound";

let routes = [
  { path: "/", element: <Home /> },
  { path: "menu", element: <Menu /> },
  { path: "about", element: <About /> },
  { path: "orderonline", element: <OrderOnline /> },
  { path: "reservation", element: <Reservation /> },
  { path: "contact", element: <Contact /> },
  { path: "/*", element: <NoteFound /> },
];

export default routes