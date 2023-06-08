import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { setActiveTab, setListing } from "../../../redux/actions";
import { getEmailListing } from "../../../utils";
export const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
    let { type } = useParams();
    const getListing = async () => {
        dispatch(setListing(await getEmailListing()));
    }
    if (!type) {
      getListing()
    dispatch(setActiveTab("inbox"));
    return <Navigate to="/inbox"></Navigate>;
  }
  return children;
};
