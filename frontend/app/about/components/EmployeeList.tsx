import React from 'react';
import Employee from './Employee';

interface EmployeeListProps {
    emList: Array<Employee>;
}

const EmployeeList : React.FC<EmployeeListProps> = ({emList}) => {
  return (
    <div className="p-5">
      <div className="text-[4rem] font-bold text-black">Our Story</div>
      <div className="text-black">At Purrlicious Boba , we’re more than just a place to grab a drink—we dedicated to bring everyone  joy through 
        delicious  boba teas and the love of animals. Here, you can sip on our homemade crafted boba tea while enjoying 
        the company of our friendly  cats. We believe that spending time with animals can uplift spirits and improve mental 
        well-being. So we’ve created a space where you can relax, unwind, and let our furry friends brighten your day. 
        Our goal is to spread happiness, one boba and one purr at a time.
      </div>

      <div className="flex flex-row flex-wrap justify-between items-center max-w-full">
        {
            emList.map((employee, index) => (
                <Employee key={index} emp={employee}/>
            ))
        }
      </div>
    
    </div>
  );
};

export default EmployeeList;