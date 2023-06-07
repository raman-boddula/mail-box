import { useState } from "react";
import LeftTabs from "../../atoms/left-tab/LeftTabs";
import ViewFrame from "../../atoms/view-frame/ViewFrame";
import './../../../styles/index.css';
export const ViewPage = ({ searchValue }) => {
  const [activeTab, setActiveTab] = useState("Inbox");
  const handleChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="viewframe-container">
      <LeftTabs activeTab={activeTab} handleChange={handleChange} />
      <ViewFrame searchValue={searchValue} activeTab={activeTab} />
    </div>
  );
};
