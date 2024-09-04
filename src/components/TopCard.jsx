import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useSelector } from "react-redux";
export default function TopCard() {
  const { transactions } = useSelector(
    (state) => state.transaction
  );

  const total = transactions.reduce((sum, current) => {
    return current.type === "income" ? sum+ Number(current.amount) : sum - Number(current.amount)
  },0)
  console.log(total)
console.log("The transactions are", transactions)
  return (
    <div className="px-6 py-4 bg-teal-600 rounded-lg shadow-md">
    <p className="text-white text-lg font-semibold">Your Current Balance</p>
    <div className="flex items-center mt-2 gap-2">
      <FaBangladeshiTakaSign size={24} color="white" />
      <p className="text-3xl text-white font-extrabold">{total < 0 ? 0 :total}</p>
    </div>
  </div>
  )
}
