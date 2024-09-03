export default function Form() {
    return (
      <form className="px-6 py-4 bg-white rounded-lg  space-y-4">
        <p className="text-lg font-semibold">Add New Transaction</p>
  
        {/* Name Field */}
        <div className="flex items-center gap-4">
          <label htmlFor="name" className="w-1/3 text-gray-700 font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
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
                type="radio"
                name="expenseType"
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
                type="radio"
                name="expenseType"
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
            type="number"
            className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
            placeholder="Enter amount"
          />
        </div>
        <button className="w-full mt-4 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
  Add Transaction
</button>
      </form>
    );
  }
  