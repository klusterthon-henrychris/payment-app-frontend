import React, { Fragment, ReactElement } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CustomButton } from ".";
import AddClientsForm from "../clients/AddClientsForm";

interface ModalPopupPropType {
  isModalOpen: boolean;
  toggleModal: () => void;
  heading: string;
  statement?: ReactElement | null;
  handleSubmit?: () => void;
  CustomBody?: ReactElement | null;
  buttonText?: string | null;
}

const ModalPopup: React.FC<ModalPopupPropType> = ({
  isModalOpen,
  toggleModal,
  heading,
  statement,
  handleSubmit,
  CustomBody,
  buttonText,
}) => {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={toggleModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="title">
                  {heading}
                </Dialog.Title>
                {CustomBody ? (
                  <>{CustomBody}</>
                ) : (
                  <>
                    {statement}

                    <div className="w-full flex justify-between mt-4">
                      <button
                        type="button"
                        className="text-error"
                        onClick={toggleModal}
                      >
                        Cancel
                      </button>
                      <CustomButton onClick={handleSubmit}>
                        {buttonText ?? "Save"}
                      </CustomButton>
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalPopup;
