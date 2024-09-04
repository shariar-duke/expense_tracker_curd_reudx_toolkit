import { createAsyncThunk } from "@reduxjs/toolkit";
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
  

