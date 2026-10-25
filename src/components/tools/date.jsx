import React from 'react';
import dayjs from 'dayjs';
import dayjsBusinessDays from 'dayjs-business-days';

dayjs.extend(dayjsBusinessDays);

const date = () => {
console.log(dayjs('2020-12-25').businessDaysAdd(3).format('DD/MM/YYYY'))


  return (
    <div>date</div>
  )
}

export default date