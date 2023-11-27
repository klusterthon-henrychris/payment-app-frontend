import React, { useState } from "react";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys, useAddClient } from "@/store/useApi";
import { getAllClients } from "@/contexts/apiContext";
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
    queryClient.fetchQuery([queryKeys.getAllClients], () => getAllClients(1));

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
    <div className="w-full min-h-screen bg-light-white p-6 overflow-y-visible">
      <ModalPopup
        isModalOpen={addModalOpen}
        toggleModal={toggleAddModal}
        heading="Add new client"
        CustomBody={
          <AddClientsForm handleSubmit={handleAddClient} buttonText="Save" />
        }
      />

      <div className="flex justify-end items-center">
        <CustomButton onClick={toggleAddModal}> + Add new client</CustomButton>
      </div>

      <div className="flex justify-between items-center bg-white p-6 mt-6 rounded-t-lg">
        <p className="title">Client List</p>
        <div className="flex gap-[8px] items-center">
          {/* <div className="flex items-center">
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
          </div> */}
        </div>
      </div>

      <AllClientsTable />
    </div>
  );
};

export default ClientsContainer;
