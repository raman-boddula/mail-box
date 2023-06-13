import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { setActiveTab } from "../../../redux/actions";
export const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  let { type } = useParams();
  if (!type) {
    dispatch(setActiveTab("inbox"));
    return <Navigate to="/inbox"></Navigate>;
  }
  return children;
};
