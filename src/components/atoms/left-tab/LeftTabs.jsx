import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveTab } from "../../../redux/actions";
const initialState = ["AllMails", "Inbox", "Spam", "Trash", "Sent"];
export const LeftTabs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { activeTab } = useSelector((state) => state);
  return (
    <div className="left-tabs-container dis-flex flex-dir-col ">
      {initialState.map((item) => (
        <div
          className={activeTab.toLowerCase() == item.toLowerCase() ? "active-border" : ""}
          key={item}
          onClick={() => (
            dispatch(setActiveTab(item)),
            navigate(`/${item.toLocaleLowerCase()}`)
          )}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

