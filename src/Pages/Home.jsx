import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Selected filter category
  const [jobs, setJobs] = useState([]); // Jobs data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const itemsPerPage = 6; // Number of items per page

  // Fetch jobs data from the JSON file when the component mounts
  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  const [query, setQuery] = useState(""); // Search query state

  // Handle search input changes
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Handle changes in category selection (e.g., radio buttons)
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Handle button clicks for category selection
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Calculate the range of items to display based on the current page
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // Navigate to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Navigate to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Main filtering function to filter jobs based on query and selected category
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // Filter jobs by search query (job title)
    if (query) {
      filteredJobs = jobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Further filter jobs by selected category (location, salary type, employment type, etc.)
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({ jobLocation, maxPrice, salaryType, employmentType }) => {
          return (
            jobLocation.toLowerCase() === selected.toLowerCase() ||
            parseInt(maxPrice) <= parseInt(selected) ||
            salaryType.toLowerCase() === selected.toLowerCase() ||
            employmentType.toLowerCase() === selected.toLowerCase()
          );
        }
      );
    }

    // Calculate the range of items for the current page
    const { startIndex, endIndex } = calculatePageRange();

    // Slice the filtered jobs based on the calculated range
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    // Return the filtered jobs wrapped in Card components
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };




  // Filter the items using the filteredData function
  const filteredItems = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* Main content area */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12 ">
        {/* Left sidebar */}
        <div className="bg-white p-4 rounded ">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* Job cards area */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {isLoading ? (
            <p className="font-medium ">Loading....</p>
          ) : filteredItems.length > 0 ? (
            <Jobs result={filteredItems} />
          ) : (
            <>
              <h3 className="text-lg font-black mb-2 ">
                {filteredItems.length} Jobs
              </h3>
              <p>No data found!</p>
            </>
          )}
          {/* Pagination controls */}
          {filteredItems.length > 0 && (
            <div className="flex justify-center mt-4 space-x-8">
              <button onClick={prevPage}>Previous</button>
              <span>
                Page {currentPage} of
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}>Next</button>
            </div>
          )}
        </div>

        {/* Right sidebar */}
        <div className="bg-white p-4 rounded ">Right</div>
      </div>
    </div>
  );
};

export default Home;
