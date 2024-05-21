import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPeraAge = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setJobs(data);
        setIsLoading(false);
      });
  }, []);
  // console.log(jobs)

  //  HANDLE INPUT CHANGE
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // FILTER JOBS BY TITLE
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // RADIO FILTERING
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  // BUTTON BASED FILTERING
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // CALCULATE THE INDEX RANGE
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage ;
    const endIndex = startIndex + itemsPerPage ;
    return {startIndex , endIndex}
  } 

  // FUNCTION FOR NEXT PAGE

  const nextPage = () => {
    if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
      setCurrentPage(currentPage +1);
    }
  }

  // FUNCTION FOR PREVIOUS PAGE

  

  // MAIN FUNCTION
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // FILTERING INPUT ITEMS
    if (query) {
      filteredJobs = filteredItems;
    }
    // CATEGORY FILTERING
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) => {
          jobLocation.toLowerCase() === selected.toLowerCase() ||
            parseInt(maxPrice) <= parseInt(selected) ||
            salaryType.toLowerCase() === selected.toLowerCase() ||
            employmentType.toLowerCase() === selected.toLowerCase();
        }
      );
      console.log(filteredJobs);
    }
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* MAIN CONTENT */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12 ">
        {/* LEFT SIDE */}
        <div className="bg-white p-4 rounded ">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* JOB CARDS */}
        <div className="col-span-2 bg-white p-4">
          {isLoading ? (
            <p className="font-medium ">Loading....</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-black  mb-2 ">{result.length} Jobs</h3>
              <p>No data found!</p>
            </>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-4 rounded ">Right</div>
      </div>
    </div>
  );
};

export default Home;
