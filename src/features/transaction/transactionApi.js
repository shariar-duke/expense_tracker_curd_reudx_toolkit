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

// This funtion is for editing the transation 

export const editTransaction = async(id, data)=> 
{
    const response = await axios.put(`/transactions/${id}`, data)
    return response.data
}

// this function will delete a transacation 

export const deleteTransacaton = async(id)=> {
 const response = await axios.delete(`/transactions/${id}`)
 return response.data
}