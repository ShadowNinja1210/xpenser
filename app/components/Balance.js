const ProgressBar = ({ progress, name }) => {
  const styles = {
    width: progress + "%",
  };

  return (
    <div>
      <div className="flex justify-between">
        <span className="text-base font-semibold text-black">{name}</span>
        <span className="text-sm font-semibold text-black">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div className="primary-gradient h-4 rounded-full" style={styles} />
      </div>
    </div>
  );
};

export default function Balance() {
  const balance = 20000;
  const balanceData = [
    {
      name: "HDFC Acc",
      balance: 10000,
    },
    {
      name: "SBI Acc",
      balance: 5000,
    },
    {
      name: "Cash",
      balance: 10000,
    },
    {
      name: "Mummy Acc",
      balance: 10000,
    },
  ];

  return (
    <div className="px-6 py-5 w-fit border-l-4 h-full flex flex-col gap-4">
      {/* Balances */}
      <div className="whitespace-nowrap flex flex-col gap-4">
        {/* Heading */}
        <h1 className="flex gap-2 font-bold text-2xl whitespace-nowrap primary-color">
          <span>Balance: </span>
          <span>&#8377;{balance.toLocaleString("en-IN")}</span>
        </h1>

        {/* Balance Details */}
        <div className="flex flex-col gap-2">
          {balanceData.map((data, index) => (
            <p key={index} className="flex justify-between font-bold text-lg">
              <span>{data.name}:</span>
              <span>&#8377; {data.balance.toLocaleString("en-IN")}</span>
            </p>
          ))}
        </div>
      </div>

      {/* Expenses */}
      <div className="flex flex-col gap-3">
        {/* Heading */}
        <h1 className="font-bold text-2xl whitespace-nowrap primary-color">Expenses</h1>

        <div className="flex flex-col gap-2">
          {/* Loan / EMI Progress Bar */}
          <ProgressBar progress={25} name="Loan / EMI" />

          {/* Needs Progress Bar */}
          <ProgressBar progress={55} name="Needs" />

          {/* Wants Progress Bar */}
          <ProgressBar progress={20} name="Wants" />
        </div>
      </div>
    </div>
  );
}
