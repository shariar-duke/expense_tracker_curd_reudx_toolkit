import Transaction from "./Transaction";
export default function TransactionList() {
  return (
    <div className="text-center px-4">
      <p className="text-[18px] font-medium">Your Transition</p>
      <Transaction/>
      <Transaction/>
    </div>
  );
}
