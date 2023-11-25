import React from "react";
import { CustomButton } from "@/components/common";
import FeaturedBox from "./FeaturedBox";
import Image from "next/image";
import {
  useGetTotalCatalogue,
  useGetTotalClients,
  useGetTotalInvoices,
  useGetUser,
} from "@/store/useApi";
import AllClientsTable from "../clients/AllClientsTable";
import { useRouter } from "next/navigation";

const DashboardContainer: React.FC = () => {
  const { data: user } = useGetUser();
  const clientCountData = useGetTotalClients();
  const invoicesCountData = useGetTotalInvoices();
  const catalogueCountData = useGetTotalCatalogue();

  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-light-white flex flex-col p-6">
      <div className="flex justify-between items-center pb-1">
        <p className="bold-title">Hi {user?.firstName ?? ""} 👋</p>
        <CustomButton>+ Generate Invoice</CustomButton>
      </div>

      <div className="py-6 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10">
        <FeaturedBox
          className="bg-white"
          label="No. of Clients"
          title={`${clientCountData?.data ?? 0}`}
        />
        <FeaturedBox
          className="bg-white"
          label="Catalogue Size"
          title={`${catalogueCountData?.data ?? 0}`}
        />
        <FeaturedBox
          className="bg-white"
          label="Total No. of Invoices"
          title={`${invoicesCountData?.data ?? 0}`}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 pb-6">
        <div className="h-[344px] bg-white rounded-[8px] lg:col-span-2 title flex items-center justify-center">
          {/* Sales trend */}
          <Image src="/sales-trend.svg" alt="logo" width={760} height={344} />
        </div>

        <div className="grid gap-6 h-[344px] rounded-[8px] bg-white p-6">
          <FeaturedBox
            label="Total Earnings"
            title=" $200,546"
            className="bg-success-soft h-[110px]"
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

      <div className="grid lg:grid-cols-2 gap-6 justify-between mt-6">
        <div>
          <div className="flex flex-row justify-between mt-[24px] items-center bg-[#fff] py-5">
            <p className="text-[#1E1E1E] font-Satoshi text-[16px] font-bold ml-[24px]">
              Clients
            </p>
            <div
              className="flex flex-row mr-[24px] items-center gap-[4px] cursor-pointer"
              onClick={() => router.push("/clients")}
            >
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
          <AllClientsTable showPagination={false} />
        </div>

        <div>
          <div className="flex flex-row justify-between mt-[24px] items-center bg-[#fff] py-5">
            <p className="text-[#1E1E1E] font-Satoshi text-[16px] font-bold ml-[24px]">
              Invoices
            </p>
            <div
              className="flex flex-row mr-[24px] items-center gap-[4px] cursor-pointer"
              onClick={() => router.push("/invoices")}
            >
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
          <div className="max-w-screen overflow-x-scroll overflow-y-visible">
            <table className="w-[1100px] md:w-full min-h-[100px] text-sm text-left rtl:text-right text-gray-500 overflow-y-visible">
              <thead className="text-sm font-bold border-b-[1px] border-[#D9D9D9] h-[45px] w-full">
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
                  <td scope="row" className="px-6 py-4">
                    1
                  </td>
                  <td scope="row" className="px-6 py-4">
                    Nov 10, 2023
                  </td>
                  <td className="px-6 py-4">$250</td>
                  <td className="px-6 py-4">Nov 10, 2023</td>
                  <td className="px-6 py-4">Leslie Alexander</td>
                  <td className="px-6 py-4">-</td>
                </tr>
                <tr className="bg-white border-b">
                  <td scope="row" className="px-6 py-4">
                    2
                  </td>
                  <td scope="row" className="px-6 py-4">
                    Nov 10, 2023
                  </td>
                  <td className="px-6 py-4">$250</td>
                  <td className="px-6 py-4">Nov 10, 2023</td>
                  <td className="px-6 py-4">Leslie Alexander</td>
                  <td className="px-6 py-4">-</td>
                </tr>
                <tr className="bg-white">
                  <td scope="row" className="px-6 py-4">
                    3
                  </td>
                  <td scope="row" className="px-6 py-4">
                    Nov 10, 2023
                  </td>
                  <td className="px-6 py-4">$250</td>
                  <td className="px-6 py-4">Nov 10, 2023</td>
                  <td className="px-6 py-4">Leslie Alexander</td>
                  <td className="px-6 py-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div className="w-[364px] h-[52px] border-t-[1px] border-[#D9D9D9] ml-[24px] flex">
            <p className="mx-auto text-[12px] font-Satoshi font-medium text-[#1E1E1E]">
              Showing 1-50 of 2000
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
