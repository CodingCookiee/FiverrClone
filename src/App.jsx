import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Orders from "./pages/myOrders/Orders";
import MyGigs from "./pages/myGigs/myGigs";
import Add from "./pages/add/Add";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout />,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/orders",
          element: <Orders/>
        },
        {
          path: "/mygigs",
          element: <MyGigs/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        },

      ],
  
    },
    ]);
  return (
    <div >
    <RouterProvider router={router} />
    </div>
  );
};
export default App;
