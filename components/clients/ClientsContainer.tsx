import React, { useState } from "react";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { queryKeys, useAddClient, useGetAllClients } from "@/store/useApi";
import { CustomButton } from "../common";
import ModalPopup from "../common/ModalPopup";
import AddClientsForm, { AddClientsFormValues } from "./AddClientsForm";
import DropdownMenu from "../common/DropdownMenu";

const tableHeads = [
  "#",
  "Client name",
  "Email",
  "Business name",
  "Billing address",
];

const ClientsContainer: React.FC = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const { data: allClients, isLoading: clientsLoading } = useGetAllClients();
  const { mutate: addClient } = useAddClient();

  const toggleAddModal = () => setAddModalOpen(!addModalOpen);
  const toggleDeleteModal = () => setDeleteModalOpen(!deleteModalOpen);
  const toggleEditModal = () => setEditModalOpen(!editModalOpen);

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

  const menuItems = [
    {
      title: "View",
      onClick: () => {},
    },
    {
      title: "Edit",
      onClick: toggleEditModal,
    },
    {
      title: "Delete",
      onClick: toggleDeleteModal,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-light-white p-6">
      <ModalPopup
        isModalOpen={addModalOpen}
        toggleModal={toggleAddModal}
        heading="Payment successful"
        CustomBody={<AddClientsForm handleSubmit={handleAddClient} />}
      />
      <ModalPopup
        isModalOpen={editModalOpen}
        toggleModal={toggleEditModal}
        heading="Edit client info?"
        CustomBody={<AddClientsForm handleSubmit={() => {}} />}
      />
      <ModalPopup
        isModalOpen={deleteModalOpen}
        toggleModal={toggleDeleteModal}
        heading="Delete client?"
        statement={
          <p>
            Are you sure you want to delete this client? This action cannot be
            reversed and all related info including invoices and payment history
            will be lost.
          </p>
        }
        buttonText="Delete"
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

      <table className="w-[1100px] text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-sm font-bold border-b-[1px] border-[#D9D9D9] h-[45px] w-full">
          <tr>
            {tableHeads.map((headTitle) => (
              <th key={headTitle} scope="col" className="px-6 py-3">
                {headTitle}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {allClients?.map((client, i) => {
            return (
              <tr key={client.emailAddress + i} className="bg-white border-b">
                <td scope="row" className="px-6 py-4">
                  {i + 1}
                </td>
                <td scope="row" className="px-6 py-4">
                  {`${client.firstName} ${client.lastName}`}
                </td>
                <td className="px-6 py-4">{client.emailAddress}</td>
                <td className="px-6 py-4">{client.businessName}</td>
                <td className="px-6 py-4">{client.address}</td>
                <td className="px-6 py-4">
                  <DropdownMenu
                    title={<HiOutlineDotsHorizontal />}
                    menuItems={menuItems}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="w-[1100px] h-[52px] border-t-[1px] border-[#D9D9D9] ml-[24px] flex">
        <p className="mx-auto text-[12px] font-Satoshi font-medium text-[#1E1E1E]">
          Showing 1-50 of 2000
        </p>
      </div>
    </div>
  );
};

export default ClientsContainer;
