
import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import SearchResultContainer from "./Components/SearchResultContainer";

function App() {
  return (
    <div>
      <Head />
      <Body />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <SearchResultContainer />,
      },
    ],
  },
]);

export default App;

/**
 * Head
 * Body
 *  Sidebar
 *   MenuItems
 * MainContainer
 *  ButtonList
 *  VideoContainer
 *   VideoCard
 *
 *
 *
 *
 *
 */
