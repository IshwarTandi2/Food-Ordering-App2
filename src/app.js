import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// import AboutClass from "./components/AboutClass";

const Grocery = lazy(()=>import("./components/Grocery"));
const AboutClass = lazy(() => import("./components/AboutClass"));

const AppLayout = () => {
     return (
         <Provider store={appStore}>
          <div className="app-layout">
               <Header />
               <Outlet />
          </div> </Provider>

     // <div className="app-layout">
     //            <Header />
     //           <Outlet />
     //           </div>
          
     )
}

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
                    element: <Suspense fallback={<h1>...Loading</h1>}>
                         <AboutClass />
                    </Suspense>
                    ,
               },
               {
                    path: "/grocery",
                    element: <Suspense fallback={<h1>...Loading</h1>}>
                         <Grocery />
                    </Suspense>
                    ,
               },
               {
                    path: "/contact",
                    element: <Contact />,
               },
               {
                    path: "/restaurants/:resId",
                    element: <RestaurantMenu />,
               },
          ],
          errorElement: <Error />,
     },

]
);
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);

























