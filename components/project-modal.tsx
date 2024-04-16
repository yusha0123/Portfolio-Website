"use client";

import useModalStore from "@/hooks/use-modal-store";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

const ProjectModal = () => {
  const { isOpen, onClose, data } = useModalStore();

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-sm" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-y-auto rounded-2xl bg-[#0C2D57] py-5 px-3 shadow-xl transition-all flex flex-col">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-bold text-textDark mb-4 flex justify-between"
                >
                  {data?.title}
                  <span>
                    <MdOutlineClose
                      onClick={onClose}
                      className="text-2xl text-textGreen cursor-pointer hover:text-red-500 transition duration-300"
                    />
                  </span>
                </Dialog.Title>
                <div className="relative w-full">
                  <Image
                    src={data?.image!}
                    alt="project-image"
                    width={400}
                    height={400}
                    priority
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col my-4">
                  <p className="text-md leading-7 mb-2 text-textLight font-bodyFont">
                    {data?.description}
                  </p>
                  <span className="flex justify-center gap-x-5">
                    <a href={data?.github} target="_blank">
                      <FiGithub className="hover:-translate-y-1 w-6 h-6  hover:text-textGreen transition-transform cursor-pointer" />
                    </a>
                    {data?.live && (
                      <a href={data.live} target="_blank">
                        <FiExternalLink className="hover:-translate-y-1 hover:text-textGreen duration-300 transition-transform cursor-pointer w-6 h-6 " />
                      </a>
                    )}
                  </span>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectModal;
