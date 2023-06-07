import { useEffect, useState } from "react";
import { ApiService } from "../../../services/api.service";

const ViewFrame = ({ activeTab, searchValue }) => {
  const [mainList, setMainListing] = useState([]);
  const [list, setListing] = useState([]);
  useEffect(() => {
    getListing();
  }, []);
  useEffect(() => {
    setListing(getFilteredData("inbox"));
  }, [mainList]);
  const getListing = async () => {
    let res = await ApiService.getEmailList();
    if (res.status === 200) {
      setMainListing(res.data);
    }
  };
  const getFilteredData = (value) => {
    if (value === "AllMails") {
      return mainList;
    }
    let filterList = mainList.filter((mail) => {
      return mail.tag.includes(value.toLowerCase());
    });
    return filterList;
  };
  useEffect(() => {
    setListing(getFilteredData(activeTab));
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
      {list.length > 0
        ? list.map((mail) => (
            <div
              key={mail.id}
              className="mail-container align-items-center dis-flex"
            >
              <span className="unread">.</span> {mail.subject}
            </div>
          ))
        : null}
    </div>
  );
};
export default ViewFrame;
