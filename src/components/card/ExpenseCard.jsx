import Form from "../Form";
import TopCard from "../TopCard";
import TransactionList from "../Transactions/TransactionList";
export default function ExpenseCard() {
  return (
    <div >
      <TopCard />
      <Form/>
      <TransactionList/>
    </div>
  );
}
