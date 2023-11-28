import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import {
  queryKeys,
  useDeleteClient,
  useGetAllClients,
  useUpdateClient,
} from "@/store/useApi";
import { getAllClients } from "@/contexts/apiContext";
import DropdownMenu from "../common/DropdownMenu";
import ModalPopup from "../common/ModalPopup";
import AddClientsForm, { AddClientsFormValues } from "./AddClientsForm";

const tableHeads = [
  "#",
  "Client name",
  "Email",
  "Business name",
  "Billing address",
];

interface IAllClientsTable {
  showPagination?: boolean;
}

const AllClientsTable: React.FC<IAllClientsTable> = ({
  showPagination = true,
}) => {
  const router = useRouter();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editId, setEditId] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { mutate: updateClient } = useUpdateClient();
  const { mutate: deleteClient } = useDeleteClient();

  const toggleDeleteModal = (id: string) => {
    setDeleteModalOpen(!deleteModalOpen);
    setDeleteId(id);
  };

  const toggleEditModal = (id: string) => {
    setEditModalOpen(!editModalOpen);
    setEditId(id);
  };

  const queryClient = useQueryClient();

  const refetchAllClients = () =>
    queryClient.fetchQuery([queryKeys.getAllClients], () =>
      getAllClients(pageNumber)
    );

  const { data: clientsData, isLoading: clientsLoading } =
    useGetAllClients(pageNumber);

  const handlePrevPageClick = () => {
    if (pageNumber === 0) return;
    else {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPageClick = () => {
    if (pageNumber === 10) return;
    else {
      setPageNumber(pageNumber + 1);
    }
  };

  const handleEditInfo = (values: AddClientsFormValues) => {
    updateClient(
      { clientId: editId, postBody: values },
      {
        onSuccess: () => {
          refetchAllClients();
          setEditModalOpen(false);
          toast.success("Client info updated");
        },
      }
    );
  };

  const handleDeleteInfo = () => {
    deleteClient(
      { clientId: editId },
      {
        onSuccess: () => {
          refetchAllClients();
          setDeleteModalOpen(false);
          toast.success("Client deleted");
        },
      }
    );
  };

  useEffect(() => {
    refetchAllClients();
  }, [pageNumber]);

  const menuItems = [
    {
      title: "View",
      onClick: (id: string) => router.push(`/clients/${id}`),
    },
    {
      title: "Edit",
      onClick: toggleEditModal,
      id: editId,
    },
    {
      title: "Delete",
      onClick: toggleDeleteModal,
      id: deleteId,
    },
  ];

  return (
    <div className="max-w-screen overflow-x-scroll overflow-y-visible">
      {clientsLoading || !clientsData?.items ? (
        <div className="flex items-center justify-center h-[200px] w-full bg-white mt-2">
          <p className="title mt-10">Loading...</p>
        </div>
      ) : clientsData?.items?.length < 1 ? (
        <div className="flex items-center justify-center h-[200px] w-full bg-white mt-2">
          <p className="title mt-10">No clients yet</p>
        </div>
      ) : (
        <table className="w-[1100px] md:w-full min-h-[100px] text-sm text-left rtl:text-right text-gray-500 overflow-y-visible">
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
            {clientsData?.items &&
              clientsData?.items?.map((client, i) => {
                return (
                  <tr
                    key={client.emailAddress + i}
                    className="bg-white border-b"
                  >
                    <td scope="row" className="px-6 py-4">
                      {i + 1}
                    </td>
                    <td scope="row" className="px-6 py-4">
                      {`${client.firstName} ${client.lastName}`}
                    </td>
                    <td className="px-6 py-4">{client.emailAddress}</td>
                    <td className="px-6 py-4">{client.businessName}</td>
                    <td className="px-6 py-4">{client.address}</td>
                    <td className="px-6 py-4 overflow-y-visible">
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
      )}

      {showPagination && (
        <div className="w-[150px] flex items-center m-auto justify-center mt-3">
          <button
            disabled={!clientsData?.hasPrevious}
            className="mx-auto font-medium text-neutral-black text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePrevPageClick}
          >
            <HiOutlineChevronLeft />
          </button>
          <p className="mx-auto font-medium text-neutral-black text-sm">
            Showing {clientsData?.currentPage}-
            {(clientsData?.currentPage ?? 1) * 10} of{" "}
            {clientsData?.totalCount ?? 1}
          </p>
          <button
            className="mx-auto font-medium text-neutral-black text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleNextPageClick}
            disabled={!clientsData?.hasNext}
          >
            <HiOutlineChevronRight />
          </button>
        </div>
      )}

      <ModalPopup
        isModalOpen={editModalOpen}
        toggleModal={() => setEditModalOpen(false)}
        heading="Edit client info"
        CustomBody={
          <AddClientsForm
            handleSubmit={handleEditInfo}
            buttonText="Save"
            oldValues={clientsData?.items?.find(
              (client) => client.clientId === editId
            )}
          />
        }
      />
      <DeleteClientModal
        deleteModalOpen={deleteModalOpen}
        toggleDeleteModal={() => setDeleteModalOpen(false)}
        handleSubmit={handleDeleteInfo}
      />
    </div>
  );
};

export default AllClientsTable;

type IClientsModal = {
  deleteModalOpen: boolean;
  toggleDeleteModal: () => void;
  handleSubmit: () => void;
};

export const DeleteClientModal: React.FC<IClientsModal> = ({
  deleteModalOpen,
  toggleDeleteModal,
  handleSubmit,
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
      handleSubmit={handleSubmit}
    />
  );
};
