import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./GoHome.style.scss";
import HomeIcon from "@material-ui/icons/Home";
import { ChildrenProps } from "../../utils/interfaces";

const GoHome = ({ children }: ChildrenProps) => {
  return (
    <div className="notFound">
      {children}
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          size="large"
          className="btn"
          startIcon={<HomeIcon />}
        >
          Home
        </Button>
      </Link>
    </div>
  );
};

export default GoHome;
