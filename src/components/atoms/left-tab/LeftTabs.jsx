const initialState = ["AllMails", "Inbox", "Spam", "Trash", "Sent"];
const LeftTabs = ({ activeTab, handleChange }) => {
  return (
    <div className="left-tabs-container dis-flex flex-dir-col ">
      {initialState.map((item) => (
        <div
          className={activeTab === item ? "active-border" : ""}
          key={item}
          onClick={() => handleChange(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default LeftTabs;
