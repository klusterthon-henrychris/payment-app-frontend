import React, { useState } from "react";
import { useGetAllClients } from "@/store/useApi";
import DropdownMenu from "../common/DropdownMenu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useRouter } from "next/navigation";
import ModalPopup from "../common/ModalPopup";
import AddClientsForm from "./AddClientsForm";

const tableHeads = [
  "#",
  "Client name",
  "Email",
  "Business name",
  "Billing address",
];

const AllClientsTable: React.FC = () => {
  const router = useRouter();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const toggleDeleteModal = () => setDeleteModalOpen(!deleteModalOpen);
  const toggleEditModal = () => setEditModalOpen(!editModalOpen);

  const { data: allClients, isLoading: clientsLoading } = useGetAllClients();

  const menuItems = [
    {
      title: "View",
      onClick: (id: string) => router.push(`/clients/${id}`),
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
    <div className="max-w-screen overflow-x-scroll">
      <table className="w-[1100px] md:w-full text-sm text-left rtl:text-right text-gray-500 ">
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
                    id={client.clientId}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <ModalPopup
        isModalOpen={editModalOpen}
        toggleModal={toggleEditModal}
        heading="Edit client info?"
        CustomBody={<AddClientsForm handleSubmit={() => {}} />}
      />
      <DeleteClientModal
        deleteModalOpen={deleteModalOpen}
        toggleDeleteModal={toggleDeleteModal}
      />
    </div>
  );
};

export default AllClientsTable;

type IClientsModal = {
  deleteModalOpen: boolean;
  toggleDeleteModal: () => void;
};

export const DeleteClientModal: React.FC<IClientsModal> = ({
  deleteModalOpen,
  toggleDeleteModal,
}) => {
  return (
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
  );
};
