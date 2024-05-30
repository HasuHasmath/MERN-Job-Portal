import React from 'react'
import Location from './Location';
import Salary from './Salary';
import JobPostingDate from './JobPostingDate';

const Sidebar = ({ handleChange, handleClick  }) => {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2 ">Filters</h3>

      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick={handleClick} />
      <JobPostingDate handleChange={handleChange} handleClick={handleClick}/>
    </div>
  );
};

export default Sidebar
