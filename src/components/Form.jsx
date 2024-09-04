import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../features/transaction/transactionSlice";
export default function Form() {
  const [data, setData] = useState({
    name: "",
    amount: "",
    type: "",
  });
  const [submissionAttempted, setSubmissionAttempted] = useState(false);
  const dispatch = useDispatch();
  const { name, amount, type } = data;
  const [editMode, setEditMode] = useState(false);
  const { isLoading, isError } = useSelector((state) => state.transaction);

  // object take anar try korbo
  const { editing } = useSelector((state) => state.transaction) || {};
  console.log("The editing objec is", editing);

  // listen for editMode active
  useEffect(() => {
    const { id, name, amount, type } = editing || {};
    if (id) {
      setEditMode(true);
      setData({
        name: name || "", // Set name
        amount: amount || "", // Set amount
        type: type || "", // Set type
      });
    } else {
      setEditMode(false);
      setData({
        name: "",
        amount: "",
        type: "",
      });
    }
  }, [editing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "amount" ? Number(value) : value,
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createTransaction(data));
    if (!isError) {
      setData({
        name: "",
        amount: "",
        type: "",
      });
    }

    setSubmissionAttempted(true);
  };

  const handleEdit = (e) => {};
  return (
    <form
      onSubmit={handleCreate}
      className="px-6 py-4 bg-white rounded-lg  space-y-4"
    >
      <p className="text-lg font-semibold">Add New Transaction</p>

      {/* Name Field */}
      <div className="flex items-center gap-4">
        <label htmlFor="name" className="w-1/3 text-gray-700 font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          required
          name="name"
          onChange={handleChange}
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          placeholder="Enter name"
        />
      </div>

      {/* Expense Type Field */}
      <div className="flex items-center gap-4">
        <span className="w-1/3 text-gray-700 font-medium">Type</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <input
              id="expenseTypeIncome"
              onChange={handleChange}
              value="income"
              type="radio"
              name="type"
              checked={type === "income"}
              className="h-4 w-4 text-teal-600 border-gray-300 focus:ring-teal-500"
            />
            <label
              htmlFor="expenseTypeIncome"
              className="ml-2 text-gray-700 font-medium"
            >
              Income
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="expenseTypeExpense"
              onChange={handleChange}
              value="expense"
              type="radio"
              name="type"
              required
              checked={type === "expense"}
              className="h-4 w-4 text-teal-600 border-gray-300 focus:ring-teal-500"
            />
            <label
              htmlFor="expenseTypeExpense"
              className="ml-2 text-gray-700 font-medium"
            >
              Expense
            </label>
          </div>
        </div>
      </div>

      {/* Amount Field */}
      <div className="flex items-center gap-4">
        <label htmlFor="amount" className="w-1/3 text-gray-700 font-medium">
          Amount
        </label>
        <input
          id="amount"
          onChange={handleChange}
          value={amount}
          type="number"
          name="amount"
          required
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          placeholder="Enter amount"
        />
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className="w-full mt-4 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
      >
        Add Transaction
      </button>

      {editMode && (
        <button
          onClick={() => setEditMode(false)}
          className="w-full mt-4 bg-red-400 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        >
          Cancel Edit
        </button>
      )}
      {submissionAttempted && !isLoading && isError && (
        <div className="text-center">
          <p className="text-[18px] text-red-600 text-bold">
            There was an error occured
          </p>
        </div>
      )}
    </form>
  );
}
