/* eslint-disable react/prop-types */
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { editActive, removeTransaction } from "../../features/transaction/transactionSlice";
export default function Transaction({transactionData}) {
    const dispatch = useDispatch()
    const { id ,name, amount , type } = transactionData

    const handleEditSelect=()=> 
    {
       dispatch(editActive(transactionData))
    }

    const handleDeleteTransaction =()=> 
    {
       dispatch(removeTransaction(id))
    }
    
  return (
    <div className={` ${type ==="income" ? "bg-teal-600" : "bg-red-400"} flex justify-between p-3  rounded-md mt-[10px]`}>
      <p className="text-white text-[16px] font-medium">{name}</p>
      <div className="flex items-center gap-[8px] ">
        <FaBangladeshiTakaSign size={16} color="white" />
        <p className="text-[16px] font-medium text-white ml-[-4px]">{amount} </p>
        <img onClick={handleEditSelect} src="/edit.svg" height={16} width={16} alt="edit" className="cursor-pointer" />
        <img onClick={handleDeleteTransaction} src="/delete.svg" height={16} width={16} alt="delete" className="cursor-pointer"/>
      </div>
    </div>
  );
}
