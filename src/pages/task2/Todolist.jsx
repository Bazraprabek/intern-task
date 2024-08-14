import React, { useState } from "react";
import Button from "../task1/components/Button";
import Modal from "./components/Modal";
import { Plus } from "@phosphor-icons/react";

const Todolist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="w-full min-h-80 bg-[#B9C1FE]">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-around p-2 w-full">
          <h1 className="text-2xl">ToDoList</h1>
          <button
            className=" text-gray-500 hover:text-gray-700"
            onClick={handleOpenModal}
          >
            <Plus size={32} />
          </button>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h1 className="text-2xl font-semibold mb-4">Add ToDos</h1>
          <input type="text" name="name" id="name" className="border p-2" />
        </Modal>
        <div>
          <h1 className="text-2xl">Todolists</h1>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
