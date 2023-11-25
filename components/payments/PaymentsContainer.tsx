import React from "react";
import AllClientsTable from "../clients/AllClientsTable";

const PaymentsContainer: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-light-white p-6">
      <div className="flex justify-between items-center bg-white p-6 mt-6 rounded-t-lg">
        <p className="title">Payments</p>
        <div className="flex gap-[8px] items-center">
          <div className="flex items-center">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
              <input
                type="search"
                id="search"
                style={{ textIndent: "16px" }}
                className="w-[283px] h-[25px] py-6 border-[1px] border-[#D9D9D9] rounded-[8px] outline-none"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </div>

      <AllClientsTable />
    </div>
  );
};

export default PaymentsContainer;
