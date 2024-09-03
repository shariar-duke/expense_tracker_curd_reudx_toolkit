import { FaBangladeshiTakaSign } from "react-icons/fa6";
export default function TopCard() {
  return (
    <div className="px-6 py-4 bg-teal-600 rounded-lg shadow-md">
    <p className="text-white text-lg font-semibold">Your Current Balance</p>
    <div className="flex items-center mt-2 gap-2">
      <FaBangladeshiTakaSign size={24} color="white" />
      <p className="text-3xl text-white font-extrabold">1,560</p>
    </div>
  </div>
  )
}
