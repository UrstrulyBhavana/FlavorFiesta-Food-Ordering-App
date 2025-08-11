import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import Cart from "./components/Cart";
import appStore from "./utils/appStore";
import Shimmer from './components/Shimmer';
import { Provider } from "react-redux";
import UserContext from "./utils/UserContext";
import Footer from "./components/Footer";
import MockContext from "./utils/MockContext";
import FAQ from "./components/FAQ";
import ScrollToTop from "./components/ScrollToTop";

const AppLayout = () => {

  const [userName, setUserName] = useState();
  const [useMock, setUseMock] = useState(false);

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "urstrulybhavana1432",
    };
    setUserName(data.name);
  }, []);


  return (
    <Provider store={appStore}>
      <MockContext.Provider value={{ useMock, setUseMock }}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <div className="app min-h-screen w-full overflow-x-hidden">
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
          </div>
        </UserContext.Provider>
      </MockContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <FAQ />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)


