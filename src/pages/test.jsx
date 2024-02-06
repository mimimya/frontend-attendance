import React, { useState, useEffect } from 'react';

function Test() {
  const [date, setDate] = useState(new Date());
  const [lateAttendees, setLateAttendees] = useState([]);
  const [winnerModalOpen, setWinnerModalOpen] = useState(false);
  const [winnerName, setWinnerName] = useState('');

  useEffect(() => {
    // Fetch late attendees data from API
    fetchLateAttendees(); //서버 통신
  }, [date]);

  const fetchLateAttendees = () => {
    // Mock API call to fetch late attendees data
    // Replace this with actual API call
    const mockData = [
      { id: 1, name: 'Late Attendee 1' },
      { id: 2, name: 'Late Attendee 2' },
      { id: 3, name: 'Late Attendee 3' },
    ];
    setLateAttendees(mockData);
  };

  const handlePrevDate = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - 1);
    setDate(newDate);
  };

  const handleNextDate = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 1);
    setDate(newDate);
  };

  const handleLogout = () => {
    // Logout logic
  };

  const handlePickSinger = () => {
    // Pick singer logic
    // Example: Select a random attendee from the late attendees list
    const randomIndex = Math.floor(Math.random() * lateAttendees.length);
    setWinnerName(lateAttendees[randomIndex].name);
    setWinnerModalOpen(true);
  };

  const handleCloseModal = () => {
    setWinnerModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700"><h2 class="font-semibold text-slate-800 dark:text-slate-100">Direct VS Indirect</h2></div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Admin Attendance Management</h1>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">로그아웃</button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <button onClick={handlePrevDate} className="mr-2">&lt;</button>
          <span className="font-bold">{date.toLocaleDateString()}</span>
          <button onClick={handleNextDate} className="ml-2">&gt;</button>
        </div>
        <div>
          <span className="font-bold">지각 2</span>
          <span className="font-bold">출석 27</span>
          <span className="font-bold">결석 1</span>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4 mb-4">
        {/* Dynamically generated attendance boxes will go here */}
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">오늘의 지각자</h2>
        <button onClick={handlePickSinger} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">오늘의 가수 뽑기</button>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {lateAttendees.map((attendee) => (
          <div key={attendee.id} className="attendance-box">{attendee.name}</div>
        ))}
      </div>
      {winnerModalOpen && (
        <div id="winnerModal" className="modal">
          <div className="modal-content">
            <span onClick={handleCloseModal} className="close">&times;</span>
            <p id="winnerName" className="text-center font-bold">{winnerName}</p>
            <p className="text-center">Congratulations!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Test;