import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import Transaction from "./Transaction";

export default function TransactionList() {

  const dispatch = useDispatch();
  const { isLoading, isError, transactions } = useSelector(
    (state) => state.transaction
  );

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  // Corrected conditional rendering
  let content = null;

  if (isLoading) {
    content = (
      <p className="text-[20px] text-red-500 font-bold mt-[10px] text-center">Loading</p>
    );
  } else if (isError) {
    content = (
      <p className="text-[20px] text-red-500 font-bold mt-[10px] text-center">
        Error Fetching Data
      </p>
    );
  } else if (transactions.length === 0) {
    content = (
      <p className="text-[20px] text-red-500 font-bold mt-[10px] text-center">
        Not Enough Data Available
      </p>
    );
  } else {
    content = (
      <div>
        {transactions.map((t) => (
          <Transaction key={t.id} transactionData={t} />
        ))}
      </div>
    );
  }

  return <div className="text-center px-4">{content}</div>;
}
