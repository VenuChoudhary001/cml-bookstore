import { add, book,update,remove} from "@/redux/reducers/book-slice";
import React from "react";
import { useDispatch} from "react-redux";

export const AddBooks = ({ discard }: { discard: (val: boolean) => void }) => {
  const [bookData, setBookData] = React.useState<book>({
    name: "",
    price: -1,
    category: "",
    id: "",
    description: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (
      bookData.name.length > 0 &&
      bookData.price > -1 &&
      bookData.category.length > 0 &&
      bookData.description.length > 0
    ) {
      dispatch(add({ ...bookData, id: new Date().getMilliseconds().toString() }));
    }
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0 0 0 / 0.5)",
        }}
        className="absolute top-0 left-0  w-screen h-screen flex items-center justify-center"
      >
        <div className="flex flex-col gap-3 w-[500px] bg-white p-6 rounded-md shadow-lg">
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            className="border-2 border-green-500"
            onChange={(e) => setBookData({ ...bookData, name: e.target.value })}
          />
          <label htmlFor="name">Price</label>
          <input
            type={"text"}
            className="border-2 border-green-500"
            onChange={(e) =>
              setBookData({ ...bookData, price: parseInt(e.target.value) })
            }
          />
          <label htmlFor="name">Category</label>
          <input
            type={"text"}
            className="border-2 border-green-500"
            onChange={(e) =>
              setBookData({ ...bookData, category: e.target.value })
            }
          />
          <label htmlFor="name">Description</label>
          <textarea
            rows={5}
            className="border-2 border-green-500"
            onChange={(e) =>
              setBookData({ ...bookData, description: e.target.value })
            }
          />
          <button className="border-2 border-black" onClick={handleSubmit}>
            ADD
          </button>
          <button
            className="border-2 border-red-500"
            onClick={() => discard(false)}
          >
            Discard
          </button>
        </div>
      </div>
    </>
  );
};


export const UpdateForm=({item,discard}:{item:book,discard:(val:boolean)=>void})=>{
    const dispatch=useDispatch();
    
    const [bookData, setBookData] = React.useState<book>({
        name:item.name,
        price:item.price,
        category:item.category,
        id:item.id,
        description:item.description,
      });
    
    const handleSubmit=()=>{
        if (
            bookData.name.length > 0 &&
            bookData.price > -1 &&
            bookData.category.length > 0 &&
            bookData.description.length > 0
          ) {
            dispatch(update(bookData));
          }
    }
    return (
        <>
        <div
        style={{
          backgroundColor: "rgba(0 0 0 / 0.5)",
        }}
        className="absolute top-0 left-0  w-screen h-screen flex items-center justify-center"
      >
        <div className="flex flex-col gap-3 w-[500px] bg-white p-6 rounded-md shadow-lg">
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            value={bookData.name}
            className="border-2 border-green-500"
            onChange={(e) => setBookData({ ...bookData, name: e.target.value })}

          />
          <label htmlFor="name">Price</label>
          <input
            value={bookData.price}

            type={"text"}
            className="border-2 border-green-500"
            onChange={(e) =>
                setBookData({ ...bookData, price: parseInt(e.target.value) })
              
            }
          />
          <label htmlFor="name">Category</label>
          <input
            type={"text"}
            value={bookData.category}

            className="border-2 border-green-500"
            onChange={(e) =>
                setBookData({ ...bookData, category: e.target.value })
              }
          />
          <label htmlFor="name">Description</label>
          <textarea
            rows={5}
            value={bookData.description}

            className="border-2 border-green-500"
            onChange={(e) =>
                setBookData({ ...bookData, description: e.target.value })
              }
          />
          <button onClick={handleSubmit} className="border-2 border-black">
            update
          </button>
          <button
            className="border-2 border-red-500"
            onClick={() => discard(false)}
          >
            Discard
          </button>
          <button onClick={()=>{dispatch(remove(bookData.id));discard(false);}}>Delete</button>
        </div>
      </div>
        </>
    )
}