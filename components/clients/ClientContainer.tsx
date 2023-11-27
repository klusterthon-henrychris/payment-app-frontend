import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys, useGetClientById, useUpdateClient } from "@/store/useApi";
import AllClientsTable, { DeleteClientModal } from "./AllClientsTable";
import ModalPopup from "../common/ModalPopup";
import AddClientsForm, { AddClientsFormValues } from "./AddClientsForm";
import { CustomButton, FeaturedBox } from "../common";

const ClientContainer: React.FC = () => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const { clientId } = useParams();
  const { data: client } = useGetClientById(clientId as string);
  const { mutate: updateClient } = useUpdateClient();

  const toggleDeleteModal = () => setDeleteModalOpen(!deleteModalOpen);
  const toggleEditModal = () => setEditModalOpen(!editModalOpen);

  const queryClient = useQueryClient();

  const refetchData = () =>
    queryClient.invalidateQueries([queryKeys.getClientById]);

  const handleEditInfo = (values: AddClientsFormValues) => {
    updateClient(
      { clientId: client?.clientId, postBody: values },
      {
        onSuccess: () => {
          refetchData();
          setEditModalOpen(false);
          toast.success("Client info updated");
        },
      }
    );
  };

  return (
    <div className="w-full min-h-screen bg-light-white p-6">
      <div className="flex justify-end items-center gap-6">
        <button type="submit" onClick={toggleDeleteModal}>
          <Image src="/icon-delete.svg" alt="delete" width={48} height={48} />
        </button>
        <CustomButton onClick={toggleEditModal}>Edit client info</CustomButton>
      </div>
      <div className="grid md:grid-cols-5 py-6 gap-6">
        <div>
          <Image
            src="/client-avatar.svg"
            alt="avatar"
            width={238}
            height={216}
          />
        </div>
        <div className="flex flex-col gap-3 justify-between col-span-3">
          <div className="w-full">
            <p className="bold-title">
              {`${client?.firstName ?? ""} ${client?.lastName ?? ""}`}
            </p>
            <p className="font-bold text-sm lg:text-lg mt-2">
              {client?.emailAddress ?? ""}
            </p>
          </div>
          <div className="flex gap-4">
            <FeaturedBox
              label="All time payments"
              title="₦248,054"
              className="w-[220px] bg-success-soft"
            />
            <FeaturedBox
              label="Estimated Future Earnings"
              title="₦48,054"
              className="w-[220px] bg-warning-soft"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <FeaturedBox
          label="All Orders"
          title="15"
          className="w-full bg-white"
        />
        <FeaturedBox
          label="Completed Orders"
          title="12"
          className="w-full bg-white"
        />
        <FeaturedBox
          label="Pending Orders"
          title="3"
          className="w-full bg-white"
        />
      </div>

      {/* TEMP PLACEHOLDER */}
      <div className="flex justify-between items-center bg-white p-6 mt-20 rounded-t-lg">
        <p className="title">Client List</p>
      </div>
      <AllClientsTable />

      <ModalPopup
        isModalOpen={editModalOpen}
        toggleModal={toggleEditModal}
        heading="Edit client info"
        CustomBody={
          <AddClientsForm
            handleSubmit={handleEditInfo}
            oldValues={client}
            buttonText="Save"
          />
        }
      />
      <DeleteClientModal
        deleteModalOpen={deleteModalOpen}
        toggleDeleteModal={toggleDeleteModal}
      />
    </div>
  );
};

export default ClientContainer;
