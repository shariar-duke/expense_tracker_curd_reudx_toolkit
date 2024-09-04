import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTransaction, deleteTransacaton, editTransaction, getTransactions } from "./transactionApi";
const intialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchTransactions = createAsyncThunk(
  "transaction/fetchTransactions",
  async () => {
    const transactions = await getTransactions();
    return transactions;
  }
);

export const createTransaction = createAsyncThunk(
  "transaction/createTransaction",
  async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
  }
);

export const changeTransaction = createAsyncThunk(
    "transaction/changeTransaction",
    async ({id, data}) => {
      const transaction = await editTransaction({id,data});
      return transaction;
    }
  );

export const removeTransaction = createAsyncThunk("transaction/removeTransaction", async(id)=> {
    const transacation = await deleteTransacaton(id)
    return transacation
})
  
// now create the slice 
const transactionSlice = createSlice({
    name:"transaction",
    initialState:intialState,
    extraReducers:(builder)=> {
        builder.addCase(fetchTransactions.pending ,(state)=> {
            state.isError = false;
            state.isLoading = true;
        }).addCase(fetchTransactions.fulfilled, (state,action)=> 
        {
            state.isError = false;
            state.isLoading = false;
            state.transactions = action.payload
        }).addCase(fetchTransactions.rejected,(state,action)=> 
        {
            state.isError = true;
            state.isLoading= false;
            state.error = action.error?.message;
            state.transactions = []

        })
    }
})
