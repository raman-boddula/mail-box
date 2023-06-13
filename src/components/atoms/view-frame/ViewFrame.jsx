import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmailList,
  setActiveBody,
  setListing,
} from "../../../redux/actions";
export const ViewFrame = ({ searchValue }) => {
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let { activeTab, listing, emails } = useSelector((state) => state);
  let { type } = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(getEmailList());
    if (!listing.length > 0) {
      getListing();
    }
    if (searchParams.get("search")) {
      searchList();
    }
  }, []);
  const searchList = async () => {
    let data = listing;
    if (!listing.length > 0) {
      dispatch(setListing(emails));
    }
    let searched = data
      .filter((mail) => {
        return type != "allmails"
          ? mail.tag.toLowerCase() == type.toLowerCase()
          : mail;
      })
      .filter((mail) => {
        return (mail.subject + "").includes(searchParams.get("search"));
      });
    setList(searched);
  };
  useEffect(() => {
    if (searchParams.get("search")) {
      searchList();
    } else {
      let filtered = listing.filter((mail) => {
        return type != "allmails"
          ? mail.tag.toLowerCase() == type.toLowerCase()
          : mail;
      });
      setList(filtered);
    }
  }, [searchParams]);
  const getListing = async () => {
    let filtered;
    if (emails.length > 0) {
      filtered =
        type != "allmails"
          ? emails.filter((mail) => mail.tag == type.toLowerCase())
          : emails;
    }
    setList(filtered);
  };
  const getFilteredData = (value) => {
    if (value === "AllMails" || value == "allmails") {
      return emails;
    }
    let filterList = emails.filter((mail) => {
      return mail.tag.includes(value.toLowerCase());
    });
    return filterList;
  };
  useEffect(() => {
    if (emails.length <= 0) {
      dispatch(getEmailList());
    }
    setList(getFilteredData(activeTab));
  }, [activeTab]);
  useEffect(() => {
    if (searchValue) {
      let filteredData = getFilteredData(activeTab);
      setListing(
        filteredData.filter((mail) => {
          return (mail.subject + "" + mail.body).includes(searchValue);
        })
      );
    } else {
      setListing(getFilteredData(activeTab));
    }
  }, [searchValue]);
  return (
    <div className="frame">
      {list.length > 0 ? (
        list.map((mail) => (
          <div
            onClick={() => (
              navigate(`body/${mail.id}`), dispatch(setActiveBody(mail))
            )}
            key={mail.id}
            className="mail-container align-items-center dis-flex cursor-pointer"
          >
            <span className="unread">.</span> {mail.subject}
          </div>
        ))
      ) : (
        <div className="no-data-found vertical-center dis-flex">
          No Data Found
        </div>
      )}
    </div>
  );
};
