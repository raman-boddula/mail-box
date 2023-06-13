import { useSearchParams } from "react-router-dom";
import HomeSvg from "./../../../assets/home.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmailList } from "../../../redux/actions";
export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let { activeTab,emails} =useSelector((state) => state);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (searchParams.get("search")) {
      setValue(searchParams.get("search"));
    } else {
      setValue('')
    }
  }, [searchParams.get("search"), activeTab]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ [name]: value });
    console.log('name',name)
  }
  useEffect(() => {
    getListings();
  },[])
  const getListings = () => {
    dispatch(getEmailList());
  };
  return (
    <>
      <div className="dis-flex justify-sb align-items-center h-72">
        <div>
          <img
            src="https://s.yimg.com/nq/nr/img/yahoo_mail_global_english_white_2x.png"
            height="40px"
            alt="logo"
          />
        </div>
        <div className="dis-flex">
          <input
            name='search'
            className="search-input pl-20"
            placeholder="Search any mail"
            type="text"
            onChange={handleChange}
            value={value}
          />
          <button className="search-btn cursor-pointer">Search</button>
        </div>
        <div className="dis-flex cursor-pointer">
          <div className="dis-flex vertical-center">
            <img
              className="border-radius-50"
              src="https://s.yimg.com/ag/images/761819b9-fd9b-4993-9e4e-5a6b3a9be6f5_64sq.jpg"
              height="28px"
              alt="profile"
            />
            <span className="m-10">Raman</span>
          </div>
          <div className="dis-flex vertical-center">
            <img src={HomeSvg} alt="home" height="28px" />
            <span className="m-10">Home</span>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
