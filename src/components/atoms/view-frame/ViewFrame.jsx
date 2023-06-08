import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveBody, setListing } from "../../../redux/actions";
import { getEmailListing } from "../../../utils";
export const ViewFrame = ({ searchValue }) => {
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let { activeTab, listing } = useSelector((state) => state);
  let { type } = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    if (!listing.length > 0) {
      getListing();
    }
    if (searchParams.get("search")) {
      searchList();
    }
  }, []);
  const searchList = async () => {
    let data=listing;
    if (!listing.length > 0) {
      data = await getEmailListing();
      dispatch(setListing(data))
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
  }
  useEffect(() => {
    if (searchParams.get("search")) {
      searchList();
    } else {
      let filtered = listing.filter((mail) => {
        return type!='allmails'?mail.tag.toLowerCase() == type.toLowerCase():mail
      })
      setList(filtered)
    }
  },[searchParams])
  const getListing = async () => {
    let res = await getEmailListing();
    dispatch(setListing(res));
    let filtered=type !='allmails'?res.filter((mail) => mail.tag == type.toLowerCase()):res
    setList(filtered);
  };
  const getFilteredData = (value) => {
    if (value === "AllMails" || value == "allmails") {
      return listing;
    }
    let filterList = listing.filter((mail) => {
      return mail.tag.includes(value.toLowerCase());
    });
    return filterList;
  };
  useEffect(() => {
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
