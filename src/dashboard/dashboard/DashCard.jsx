import React from "react";
import { Link } from "react-router-dom";

const DashCard = (props) => {
  return (
    <Link
      to={props.Link}
      className="bg-primary/40 rounded grid gap-5 text-neutral px-5 py-8 justify-items-center hover:text-neutral/60 ease-in duration-300"
    >
      <props.icon className="h-12" />
      <p className="text-lg font-semibold">{props.title}</p>
    </Link>
  );
};

export default DashCard;
