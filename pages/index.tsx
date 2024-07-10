import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { book, clear, remove } from "@/redux/reducers/book-slice";
import BookCardInfo from "@/ui/book-card";
import React from "react";
import { AddBooks, UpdateForm } from "@/components/form";

export default function Home() {
  const bookList = useSelector((state: RootState) => state.bookStore.bookList);
  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [showUpdateModal, setShowUpdateModal] = React.useState(false);
  const [updateFormData, setUpdateFormData] = React.useState<book>({
    name: "",
    price: -1,
    category: "",
    description: "",
    id: "",
  });
  return (
    <>
      <button
        className="bg-black text-white p-3"
        onClick={() => setShowAddModal(true)}
      >
        Add book
      </button>
      <button
        disabled={bookList.length == 0}
        onClick={() => dispatch(clear())}
        className="bg-black mx-2 text-white p-3 disabled:bg-gray-300"
      >
        Delete all
      </button>
      {bookList?.map((item) => (
        <>
          <div className="flex gap-2 items-start border-2 p-2">
            <div
              className="cursor-pointer flex-grow"
              key={parseInt(item.id)}
              onClick={() => {
                setShowUpdateModal(true);
                setUpdateFormData(item);
              }}
            >
              <BookCardInfo {...item} />
            </div>
            <button
              onClick={() => dispatch(remove(item.id))}
              className="bg-red-600 text-white p-2 rounded-md"
            >
              Delete
            </button>
          </div>
        </>
      ))}
      {showAddModal && <AddBooks discard={setShowAddModal} />}
      {showUpdateModal && (
        <UpdateForm discard={setShowUpdateModal} item={updateFormData} />
      )}
    </>
  );
}
