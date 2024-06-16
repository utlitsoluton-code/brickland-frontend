import React, { useEffect,useState } from 'react'

const Career = () => {
  const [career,setCareer]=useState([    { "company": "Brickland Real Estate", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
  { "company": "Brickland Real Estate", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },]);
  const fetchCareer=()=>{
       
  }

  useEffect(()=>{
    fetchCareer();
  },[])
  return (
    <div>
    {career.length==0 && <div className='flex text-center justify-center'>
        <div className='text-4xl h-[300px] mt-10'>There is no current opening!!</div>
    </div>}
    {
      career.length>0 && <div className='grid grid-cols-1 gap-4 m-5'>
        {career.map((item, key) => {
                        return (
                            <div className='shadow-lg rounded p-4 cursor-pointer'>
                                <div className="flex flex-row font-semibold text-xl"><p>{item.company}</p></div>
                                <div className="flex flex-row font-semibold"><p>{item.work}</p></div>
                                <div className="flex flex-row font-medium"><p>{item.salary}</p></div>
                                <div className='text-l font-medium'>{item.role}</div>
                                <div className="flex flex-row gap-4">
                                    <div className="text-white rounded-lg bg-green-600 w-28 text-sm text-center justify-center p-1 font-medium">{item.jobtype}</div>
                                    <div className="text-white rounded-lg bg-green-600 w-28 text-sm text-center justify-center p-1 font-medium">{item.test}</div>
                                </div>
                                <div className='font-semibold'>Please Fill this form</div>
                            </div>
                        )
                    })}
      </div>
    }
    </div>
  )
}

export default Career