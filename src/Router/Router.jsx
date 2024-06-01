import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/About";
import PostAJob from "../Pages/PostAJob";
import MyJobs from "../Pages/MyJobs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "my-jobs",
        element: <MyJobs />,
      },
      {
        path: "job",
        element: <PostAJob />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;

