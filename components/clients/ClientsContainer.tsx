import React, { useState } from "react";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys, useAddClient } from "@/store/useApi";
import { CustomButton } from "../common";
import ModalPopup from "../common/ModalPopup";
import AddClientsForm, { AddClientsFormValues } from "./AddClientsForm";
import AllClientsTable from "./AllClientsTable";

const ClientsContainer: React.FC = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);

  const { mutate: addClient } = useAddClient();

  const toggleAddModal = () => setAddModalOpen(!addModalOpen);

  const queryClient = useQueryClient();
  const refetchClients = () =>
    queryClient.invalidateQueries([queryKeys.getAllClients]);

  const handleAddClient = (values: AddClientsFormValues) => {
    addClient(values, {
      onSuccess: () => {
        refetchClients();
        toggleAddModal();
        toast.success("New client added");
      },
    });
  };

  return (
    <div className="w-full min-h-screen bg-light-white p-6">
      <ModalPopup
        isModalOpen={addModalOpen}
        toggleModal={toggleAddModal}
        heading="Payment successful"
        CustomBody={<AddClientsForm handleSubmit={handleAddClient} />}
      />

      <div className="flex justify-end items-center">
        <CustomButton onClick={toggleAddModal}> + Add new client</CustomButton>
      </div>

      <div className="flex justify-between items-center bg-white p-6 mt-6 rounded-t-lg">
        <p className="title">Client List</p>
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

      {/* <div className="w-[1100px] h-[52px] border-t-[1px] border-[#D9D9D9] ml-[24px] flex">
        <p className="mx-auto text-[12px] font-Satoshi font-medium text-[#1E1E1E]">
          Showing 1-50 of 2000
        </p>
      </div> */}
    </div>
  );
};

export default ClientsContainer;
