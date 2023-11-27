import LineChart from "@/app/components/LineChart";

const Reports = () => {
  const data = {
    category: {
      spent: {
        xpense_type: "spent",
        spent: [
          { label: "Shopping", amount: 4655 },
          { label: "Utilities", amount: 8632 },
          { label: "Grocery", amount: 2119 },
          { label: "Rent", amount: 6500 },
          { label: "EMIs", amount: 7462 },
        ],
      },
    },

    months: {
      spent: {
        xpense_type: "spent",
        spent: [
          { label: "July", amount: 23662 },
          { label: "August", amount: 25792 },
          { label: "September", amount: 24339 },
          { label: "October", amount: 29652 },
          { label: "November", amount: 27532 },
        ],
      },
      received: {
        xpense_type: "received",
        received: [
          { label: "July", amount: 25600 },
          { label: "August", amount: 27400 },
          { label: "September", amount: 26100 },
          { label: "October", amount: 25700 },
          { label: "November", amount: 24900 },
        ],
      },
    },
  };

  return (
    <div className="px-8 ">
      <p className="primary-color rounded-lg font-bold text-2xl py-6 ">Report in form of Charts</p>
      <LineChart data={data} />
    </div>
  );
};

export default Reports;
