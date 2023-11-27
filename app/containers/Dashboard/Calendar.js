import { CalendarTable } from "../../components";
import { FaFilter } from "react-icons/fa";

const Calendar = () => {
  return (
    <div className="px-8">
      {/* Heading Section */}
      <section>
        <p className="primary-color rounded-lg font-bold text-2xl pt-6 pb-4">Expenses on Calendar</p>
      </section>

      {/* Table Section */}
      <section>
        <CalendarTable />
      </section>
    </div>
  );
};

export default Calendar;
