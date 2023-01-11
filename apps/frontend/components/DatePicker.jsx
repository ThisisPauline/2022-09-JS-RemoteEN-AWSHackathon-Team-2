import React from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";

const DatePicker = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div>
      <div className="flex justify-around">
        <p className="text-xs text-[#F3971F]">pick-up</p>
        <p className="text-xs text-[#F3971F]">drop-off</p>
      </div>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        rangeColors={["#F3971F"]}
        showMonthArrow={false}
        className="sm:mx-auto rdrDateDisplay rdrCalendarWrapper rdrDateDisplayWrapper [rdrDayNumber span] rdrWeekDay [rdrMonthAndYearPickers select] [rdrDateDisplayItem input] rdrDateDisplay"
      />
    </div>
  );
};

export default DatePicker;
