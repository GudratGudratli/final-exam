import {createBrowserRouter} from "react-router-dom";
import Home from '../components/pages/home/index'
import Add from "../components/pages/add/index";
import DetailPage from "../components/pages/detailPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/add",
      element: <Add />
    },
    {
      path: "/:id",
      element: <DetailPage/>
    }
  ]);

export default router