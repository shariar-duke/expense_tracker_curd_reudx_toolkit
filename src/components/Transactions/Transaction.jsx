/* eslint-disable react/prop-types */
import { FaBangladeshiTakaSign } from "react-icons/fa6";
export default function Transaction({transactionData}) {

    const {name, amount , type } = transactionData
    
  return (
    <div className={` ${type ==="income" ? "bg-teal-600" : "bg-red-400"} flex justify-between p-3  rounded-md mt-[10px]`}>
      <p className="text-white text-[16px] font-medium">{name}</p>
      <div className="flex items-center gap-[8px] ">
        <FaBangladeshiTakaSign size={16} color="white" />
        <p className="text-[16px] font-medium text-white ml-[-4px]">{amount} </p>
        <img src="/edit.svg" height={16} width={16} alt="edit" className="cursor-pointer" />
        <img src="/delete.svg" height={16} width={16} alt="delete" className="cursor-pointer"/>
      </div>
    </div>
  );
}
