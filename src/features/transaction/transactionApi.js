import axios from "../../utils/axios"; // importing the axios instance 

// First we need to write a function for get 

export const getTransactions =async()=> 
{
  const response = await axios.get("/transactions")
  return response.data
}

// This function is for creating a new Transiction

export const addTransaction = async(data)=> 
{
    const response = await axios.post("/transactions",data)
    return response.data
}