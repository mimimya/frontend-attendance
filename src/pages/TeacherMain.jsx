import {React, useState} from 'react'
import ContainerLayout from '../layouts/ContainerLayout'
import SeatsCols from '../layouts/SeatsCols'
const TeacherMain = () => {
  const [date, setDate] = useState(new Date());
  const late = 0;
  const attendance = 0;
  const absent =0;

  const handlePrevDate = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - 1);
    setDate(newDate);
    //날짜가 바뀔때마다 요청
  };

  const handleNextDate = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 1);
    setDate(newDate);
  };

  return (
    <div className='h-full w-full'>
        <header><h1>오늘의 출결</h1></header>

        <section>
        <div className="flex items-center justify-center">
          <button onClick={handlePrevDate} className="mr-2">&lt;</button>
          <span className="font-bold">{date.toLocaleDateString()}</span>
          <button onClick={handleNextDate} className="ml-2">&gt;</button>
        </div>
        <ContainerLayout>
        <div className='flex justify-between'>
          <span className="font-bold">지각{late} </span>
          <span className="font-bold">출석{attendance} </span>
          <span className="font-bold">결석{absent} </span>
        </div>
            <SeatsCols/>
        </ContainerLayout>
    </section>
    </div>
  )
}

export default TeacherMain