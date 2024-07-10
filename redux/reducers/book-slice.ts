import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface book{
    id:string;
    name: string;
    price: number;
    category: string;
    description:string;
  };

export interface bookList{
    bookList:Array<book>
}

const initialState:bookList={
    bookList:[
        {
            id:"1",
            name:"The ABC",
            price:12,
            category:'Fiction',
            description:'Hello ABC'
        }
    ]
}

export const bookStoreSlice=createSlice({
    name:'bookList',
    initialState,
    reducers:{
        add:(state,action:PayloadAction<book>)=>{
            state.bookList.push(action.payload);
        },
        remove:(state,action:PayloadAction<String>)=>{
            let newState=state.bookList.filter(item=>item.id!=action.payload);
            state.bookList=newState;
        },
        update:(state,action:PayloadAction<book>)=>{
            let idx=state.bookList.findIndex(book=>book.id==action.payload.id);
            if(idx!=-1){
                state.bookList[idx]=action.payload;
            }
        },
        clear:(state)=>{
            state.bookList=[];
        },
    }
})

export const {add,remove,update,clear}=bookStoreSlice.actions;
export default bookStoreSlice.reducer;