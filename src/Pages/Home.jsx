import Banner from "../components/Banner"
import { useEffect, useState } from "react"
import Card from "../components/Card";
import Jobs from "./Jobs";

const Home = () => {
  const [selectedCategory , setSelectedCategory] = useState(null);
  const [jobs,setJobs] = useState([]);

  useEffect(() =>{
    fetch("jobs.json").then(res => res.json()).then(data => {
      // console.log(data)
       setJobs(data)
    })
  }, [])
  // console.log(jobs)

  //  HANDLE INPUT CHANGE
  const [query , setQuery] = useState("")
  const handleInputChange = (event) =>{
  setQuery(event.target.value)
  }


  // FILTER JOBS BY TITLE
  const filterdItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)

  // RADIO FILTERING
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }
  // BUTTON BASED FILTERING 
  const handleClick = (event)=>{
    setSelectedCategory(event.target.value)
  }

  // MAIN FUNCTION 
  const filteredData = (jobs,selected, query) => {
    let filteredJobs = jobs;

  // FILTERING INPUT ITEMS
    if (query){
      filteredJobs = filterdItems
    }
  // CATEGORY FILTERING 
    if (selected){
      filteredJobs = filteredJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,employmentType,postingDate}) =>{
        jobLocation.toLowerCase() === selected.toLowerCase() || 
        parseInt(maxPrice) <= parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      })
      console.log(filteredJobs)
    }
    return filteredJobs.map((data,i) => <Card key={i} data={data}/>)

  }

  const result = filteredData(jobs,selectedCategory,query)

  return (
  <div>
    <Banner query={query} handleInputChange={handleInputChange}/>
    <div>
      <Jobs result={result}/>
    </div>
  </div>
  )
}

export default Home
