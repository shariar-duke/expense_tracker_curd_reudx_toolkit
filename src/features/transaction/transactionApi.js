import axios from "../../utils/axios"; // importing the axios instance 

// First we need to write a function for get 

const getTransactions =async()=> 
{
  const response = await axios.get("/transactions")
  return response.data
}