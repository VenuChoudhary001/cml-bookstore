import React from "react";
import { book } from "@/redux/reducers/book-slice";


const BookCardInfo = (props: book) => {
  return (
    <>
      <article className="flex-col gap-2 p-3">
        <div>Name:{props.name}</div>
        <div>Price:<span>{props.price}</span></div>
        <div>Category:{props.category}</div>
        <div>Description:{props.description}</div>
      </article>
    </>
  )
};

export default BookCardInfo;
