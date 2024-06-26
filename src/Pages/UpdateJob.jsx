import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const UpdateJob = () => {
  const { id } = useParams();
  // console.log(id)
  const {
    _id,
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    companyLogo,
    employmentType,
    description,
    postedBy,
    skills,
  } = useLoaderData();

  const [selectedOptions, setSelectedOptions] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.skills = selectedOptions;
    // console.log(data);
    fetch(`http://localhost:3000/update-job/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("Job Updated Successfully!!");
        }
        reset();
      });
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "Django", label: "Django" },
    { value: "NodeJs", label: "NodeJs" },
    { value: "SpringBoot", label: "SpringBoot" },
    { value: "AWS", label: "AWS" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* FORM */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
          {/* FIRST ROW */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                defaultValue={companyName}
                placeholder="Ex: Microsoft"
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                defaultValue={minPrice}
                placeholder="$20k"
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                defaultValue={maxPrice}
                placeholder="$100k"
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* THIRD ROW */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value={salaryType}>{salaryType}y</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                defaultValue={jobLocation}
                placeholder="Ex: New York"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* FOURTH ROW */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                defaultValue={postingDate}
                placeholder="Ex: 2024-05-25"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value={experienceLevel}>{experienceLevel}</option>
                <option value="Any experience">Any Experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Yearly</option>
              </select>
            </div>
          </div>

          {/* FIFTH ROW */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Required Skill Sets</label>
              <CreatableSelect
                defaultValue={skills}
                onChange={setSelectedOptions}
                options={options}
                isMulti
                className="create-job-input py-4 "
              />
            </div>
          </div>

          {/* SIXTH ROW */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                defaultValue={companyLogo}
                placeholder="Paste your company logo URL: https://weshare.com/img1"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value={employmentType}>{employmentType}</option>
                <option value="Full-time">Full time</option>
                <option value="Temporary">Temporary</option>
                <option value="Part-time">Part time</option>
              </select>
            </div>
          </div>

          {/* SEVENTH ROW */}
          <div className="w-full ">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              defaultValue={description}
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
              rows={6}
              placeholder="Job Description"
              {...register("description")}
            />
          </div>

          {/* LAST ROW */}
          <div className="w-full ">
            <label className="block mb-2 text-lg">Job Posted by</label>
            <input
              defaultValue={postedBy}
              type="email"
              placeholder="your email"
              {...register("postedBy")}
              className="create-job-input"
            />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-lg cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
