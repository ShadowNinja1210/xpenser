import { CalendarTable } from "../../components";

const Calendar = () => {
  return (
    <div className="px-8">
      {/* Heading Section */}
      <section>
        <p className="primary-color rounded-lg font-bold text-2xl py-6">Expenses on Calendar</p>
      </section>

      {/* Table Section */}
      <section>
        <CalendarTable />
      </section>
    </div>
  );
};

export default Calendar;
