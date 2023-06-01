import React from "react";

const NotificationTypeCard = (props) => {

  const timestamp = props.time;

  // Create a new Date object using the timestamp
  const dateObj = new Date(timestamp);

  // Extract individual date and time components
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // Month is zero-based, so add 1
  const day = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  // Format the date and time components
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="flex justify-between items-center">
      <div className="space-y-2">
        <p>{props.title}</p>
        <div className="text-gray-400 text-sm">
          <p>{formattedDate}</p>
          <span>{formattedTime}</span>
        </div>
      </div>
      {props.state && (
        <span className="indicator-item badge badge-xs badge-secondary"></span>
      )}
    </div>
  );
};

export default NotificationTypeCard;
