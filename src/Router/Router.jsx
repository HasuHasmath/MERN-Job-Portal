import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/About";
import PostAJob from "../Pages/PostAJob";
import MyJobs from "../Pages/MyJobs";
import Salary from "../sidebar/Salary";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";


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
      {
        path: "salary",
        element: <SalaryPage />,
      },

      {
        path: "edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-jobs/${params.id}`),
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;

