
const Jobs = ({result}) => { 
  
  return (
    <>
      <div>
        <h3 className="text-lg font-black  mb-2 ">{result.length} Jobs</h3>
      </div>
      <section>{result}</section>
    </>
  );
}

export default Jobs
 