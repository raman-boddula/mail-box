import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setActiveBody,
  setActiveTab,
  setListing,
} from "../../../redux/actions";
import { getEmailListing } from "../../../utils";
import { useEffect, useState } from "react";

export const BodyPage = () => {
  const [body, setBody] = useState(false);
  let { activeBody } = useSelector((state) => state);
  let { type, id } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    if (type && !activeBody) {
      dispatch(setActiveTab(type));
      getListing();
    } else {
      setBody(activeBody);
    }
  }, []);
    const getListing = async () => {
        let data = await getEmailListing();
        let filtered = type != "allmails"? data.filter((mail) => mail.tag == type.toLowerCase() && mail.id == id): data;
        setBody(filtered[0]);
        dispatch(setListing(data));
        dispatch(setActiveBody(filtered[0]));
    }
  return (
    <div>
      <div className="align-items-center dis-flex subject-container">
        <span className="unread">.</span>{" "}
        {body ? body?.subject : "NO SUBJECT FOUND"}
      </div>
      <div className="align-items-center dis-flex subject-container body-container">
        {body ? body?.body : "NO BODY FOUND"}
      </div>
    </div>
  );
};
