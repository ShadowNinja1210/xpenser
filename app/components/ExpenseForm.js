import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoAlertCircleOutline } from "react-icons/io5";
import * as yup from "yup";

const formSchema = yup.object().shape({
  xpense_type: yup.string().required("Xpense type is required"),
  date: yup.date("Invalid date").required("Date is required"),
  amount: yup.number().required("Amount is required").min(1, "Amount is invalid"),
  group: yup.string().required("Group is required"),
  account: yup.string().required("Account is required"),
  category: yup.string().required("Category is required"),
  remarks: yup.string(),
});
const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="font-medium text-base flex flex-col gap-3">
      {/* ------------------------------------------ */}
      {/* 1st Section - Xpense Type && Date */}
      <section className="flex justify-between gap-4">
        {/* Xpense Type */}
        <div>
          <p className="font-bold pb-1">
            Xpense Type <span className="text-red-600">*</span>
          </p>
          <div className="flex gap-4">
            <span className="flex gap-1">
              <label htmlFor="xpense-type_spent">Spent</label>
              <input className={`cursor-pointer`} id="xpense-type_spent" {...register("xpense_type", { required: true })} type="radio" value="Spent" />
            </span>
            <span className="flex gap-1">
              <label htmlFor="xpense-type_received">Received</label>
              <input className={`cursor-pointer`} id="xpense-type_received" {...register("xpense_type", { required: true })} type="radio" value="Received" />
            </span>
          </div>
        </div>

        {/* Date */}
        <div>
          <p className="font-bold pb-1">
            Date <span className="text-red-600">*</span>
          </p>
          <input
            className={`border-2 rounded-md border-gray-400 focus:border-blue-600 active:border-blue-600 outline-none px-2 py-1 text-sm ${errors.date && "border-red-600"}`}
            type="date"
            placeholder="Date"
            {...register("date", { required: true })}
          />
        </div>
      </section>

      {/* ------------------------------------------ */}
      {/* 2nd Section - Amount && Group */}
      <section className="flex justify-between gap-4">
        {/* Amount */}
        <div>
          <p className="font-bold pb-1">
            Amount <span className="text-red-600">*</span>
          </p>
          <input
            className={`border-2 rounded-md border-gray-400 focus:border-blue-600 active:border-blue-600 outline-none px-2 py-2 text-sm w-40 ${errors.amount && "border-red-600"}`}
            type="number"
            {...register("amount", { required: true, min: 1 })}
          />
        </div>

        {/* Group */}
        <div>
          <p className="font-bold pb-1">
            Group <span className="text-red-600">*</span>
          </p>
          <select
            className={`border-2 rounded-md border-gray-400 focus:border-blue-600 active:border-blue-600 outline-none px-2 py-2 text-sm w-32 ${errors.group && "border-red-600"}`}
            {...register("group", { required: true })}
          >
            <option value="">Select Group</option>
            <option value="Loan / EMI">Loan / EMI</option>
            <option value="Wants">Wants</option>
            <option value="Needs">Needs</option>
          </select>
        </div>
      </section>

      {/* ------------------------------------------ */}
      {/* 3rd Section - Amount */}
      <section className="flex justify-between items-end gap-4">
        <div>
          <p className="font-bold pb-1">
            Account <span className="text-red-600">*</span>
          </p>
          <select
            className={`border-2 rounded-md border-gray-400 focus:border-blue-600 active:border-blue-600 outline-none px-2 py-2 text-sm w-52 ${errors.account && "border-red-600"}`}
            {...register("account", { required: true })}
          >
            <option value="">Select Account</option>
            <option value="HDFC Acc">HDFC Acc</option>
            <option value="SBI Acc">SBI Acc</option>
            <option value="Cash">Cash</option>
          </select>
        </div>

        <button className="px-2 h-9 rounded-lg primary-btn box-border text-sm font-semibold outline-none">Add new</button>
      </section>

      {/* ------------------------------------------ */}
      {/* 4th Section - Category */}
      <section className="flex justify-between items-end">
        <div>
          <p className="font-bold pb-1">
            Category <span className="text-red-600">*</span>
          </p>
          <select
            className={`border-2 rounded-md border-gray-400 focus:border-blue-600 active:border-blue-600 outline-none px-2 py-2 text-sm w-52 ${errors.category && "border-red-600"}`}
            {...register("category", { required: true })}
          >
            <option value="">Select Category</option>
            <option value="Shopping">Shopping</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
            <option value="Grocery">Grocery</option>
            <option value="Utilities">Utilities</option>
          </select>
        </div>

        <button className="px-2 h-9 rounded-lg primary-btn box-border text-sm font-semibold outline-none">Add new</button>
      </section>

      {/* ------------------------------------------ */}
      {/* 5th Section - Remarks */}
      <section>
        <div>
          <p className="font-bold pb-1">Remarks</p>
          <textarea className="border-2 rounded-md border-gray-400 focus:border-blue-600 active:border-blue-600 outline-none px-2 py-2 text-sm w-full" {...register("remarks ", {})} />
        </div>
      </section>

      {(errors.xpense_type || errors.account || errors.amount || errors.category || errors.date || errors.date || errors.group) && (
        <p className=" flex gap-2 items-center text-red-600 justify-center">
          <IoAlertCircleOutline /> Please fill all the required fields
        </p>
      )}
      {/* SUBMIT BUTTON */}
      <button type="submit" className=" font-semibold  text-white px-2 py-2 bg-primary-color rounded-lg hover:bg-blue-800 active:bg-blue-800 focus:bg-blue-800 outline-none">
        SUBMIT
      </button>
    </form>
  );
};

export default ExpenseForm;
