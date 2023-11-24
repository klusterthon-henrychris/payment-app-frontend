import React from "react";
import { CustomButton } from "@/components/common";
import { featuredItems } from "@/constants";
import { useUser } from "@/contexts/useApi";
import FeaturedBox from "./FeaturedBox";

const DashboardContainer: React.FC = () => {
  const { user } = useUser();
  // console.log(user, "user");

  return (
    <div className="w-full min-h-screen bg-light-white flex flex-col p-6">
      <div className="flex justify-between items-center pb-1">
        <p className="bold-title">Hi {user?.firstName} 👋</p>
        <CustomButton>+ Generate Invoice</CustomButton>
      </div>

      <div className="py-6 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10">
        {featuredItems.map((item) => (
          <FeaturedBox key={item.label} label={item.label} title={item.title} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 pb-6">
        <div className="h-[400px] bg-white rounded-[8px] lg:col-span-2">
          Sales trend
        </div>

        <div className="grid gap-6 h-[400px] rounded-[8px] bg-white p-6">
          <FeaturedBox
            label="Total Earnings"
            title=" $200,546"
            className="bg-primary-soft h-[110px]"
            labelClassName="text-neutral-black"
          />
          <FeaturedBox
            label="Estimated Future Earnings"
            title="$48,025"
            className="bg-[#fff6da] h-[110px]"
            labelClassName="text-neutral-black"
          />

          <div className="flex justify-between items-center">
            <p className="text-neutral-black text-[10px]">From 325 payments</p>
            <div className="flex items-center gap-[4px]">
              <p className="text-sm font-medium text-primary">
                See all transactions
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#008678"
                className="w-[16px] h-[16px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mt-[24px]">
        <div className="">
          <div className="flex flex-row justify-between mt-[24px] ml-[24px] items-center bg-[#fff] py-5">
            <p className="text-[#1E1E1E] font-Satoshi text-[16px] font-bold ml-[24px]">
              Payment history
            </p>
            <div className="flex flex-row mr-[24px] items-center gap-[4px]">
              <p className="font-Satoshi text-[14px] font-medium text-[#008678]">
                See all
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#008678"
                className="w-[16px] h-[16px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
          <div className="relative overflow-x-auto ml-[24px]">
            <table className="w-[364px] text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-sm font-Satoshi font-bold text-[#1E1E1E] bg-[#F3F3F3] border-b-[1px] border-[#D9D9D9] h-[40px] w-full">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Client name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tx Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    1
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    Esther Howard
                  </th>
                  <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                    4584879584
                  </td>
                  <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                    Nov 10, 2023
                  </td>
                  <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                    $250
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    2
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    NCourtney Henry
                  </th>
                  <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                    4584879584
                  </td>
                  <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                    Nov 10, 2023
                  </td>
                  <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                    $250
                  </td>
                </tr>
                <tr className="bg-white">
                  <th
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    3
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    Dianne Russell
                  </th>
                  <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                    4584879584
                  </td>
                  <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                    Nov 10, 2023
                  </td>
                  <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                    $250
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-[364px] h-[52px] border-t-[1px] border-[#D9D9D9] ml-[24px] flex">
            <p className="mx-auto text-[12px] font-Satoshi font-medium text-[#1E1E1E]">
              Showing 1-50 of 2000
            </p>
          </div>
        </div>
        <div className="mr-[24px]">
          <div className="flex flex-row justify-between mt-[24px] ml-[24px] items-center bg-[#fff] py-5">
            <p className="text-[#1E1E1E] font-Satoshi text-[16px] font-bold ml-[24px]">
              Invoices
            </p>
            <div className="flex flex-row mr-[24px] items-center gap-[4px]">
              <p className="font-Satoshi text-[14px] font-medium text-[#008678]">
                See all
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#008678"
                className="w-[16px] h-[16px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
          <div className="relative overflow-x-auto ml-[24px]">
            <table className="w-[364px] text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-sm font-Satoshi font-bold text-[#1E1E1E] bg-[#F3F3F3] border-b-[1px] border-[#D9D9D9] h-[40px] w-full">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Issued Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Due Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Issued to
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    1
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    Nov 10, 2023
                  </th>
                  <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                    $250
                  </td>
                  <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                    Nov 10, 2023
                  </td>
                  <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                    Leslie Alexander
                  </td>
                  <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                    -
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    2
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    Nov 10, 2023
                  </th>
                  <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                    $250
                  </td>
                  <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                    Nov 10, 2023
                  </td>
                  <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                    Leslie Alexander
                  </td>
                  <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                    -
                  </td>
                </tr>
                <tr className="bg-white">
                  <th
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    3
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]"
                  >
                    Nov 10, 2023
                  </th>
                  <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                    $250
                  </td>
                  <td className="px-6 py-4 text-[12px] font-normal font-Satoshi text-[#1E1E1E]">
                    Nov 10, 2023
                  </td>
                  <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                    Leslie Alexander
                  </td>
                  <td className="px-6 py-4 text-[12px] font-medium font-Satoshi text-[#1E1E1E]">
                    -
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-[364px] h-[52px] border-t-[1px] border-[#D9D9D9] ml-[24px] flex">
            <p className="mx-auto text-[12px] font-Satoshi font-medium text-[#1E1E1E]">
              Showing 1-50 of 2000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
