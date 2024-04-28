import { useEffect, useState } from "react";
import "./App.css";
import UserTable from "./componenets/Table";
// import { data } from "./data";
import ModelPopup from "./componenets/ModelPopup";
import Filter from "./componenets/Filter";
import { Box } from "@mui/material";
import API from "./API";
import { useDispatch } from "react-redux";
import { endLoading, startLoading } from "./store/reducer/loader";

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const [filterData, setFilterData] = useState([]);
  const [userPopup, setUserPopup] = useState({
    open: false,
    user: {},
  });

  useEffect(() => {
    (async () => {
      try {
        dispatch(startLoading());
        const userData = await API.get("users");
        const updatedData = userData.map((user) => ({
          id: user.id,
          username: user?.username,
          firstname: user?.name?.firstname,
          lastname: user?.name?.lastname,
          phone: user?.phone,
          email: user?.email,
          city: user?.address?.city,
          street: user?.address?.street,
          number: user?.address?.number.toString(),
          zipcode: user?.address?.zipcode,
        }));
        setData(updatedData);
        setFilterData(updatedData);
      } catch (error) {
      } finally {
        dispatch(endLoading());
      }
    })();
  }, []);

  const handleClickOpen = (user) => {
    setUserPopup((preState) => ({
      ...preState,
      open: true,
      user,
    }));
  };

  const handleClose = () => {
    setUserPopup((preState) => ({
      ...preState,
      open: false,
      user: {},
    }));
  };

  const handleFilter = (userInput) => {
    if (!userInput || userInput === "") {
      setFilterData(data);
    } else {
      setPage(1);
      const filteredUserData = data.filter((userInfo) => {
        console.log("userInfo", userInfo);
        return (
          userInfo.username.includes(userInput) ||
          userInfo.phone.includes(userInput) ||
          userInfo.email.includes(userInput) ||
          userInfo.city.includes(userInput) ||
          userInfo.street.includes(userInput) ||
          userInfo.number.includes(userInput) ||
          userInfo.zipcode.includes(userInput)
        );
      });
      setFilterData(filteredUserData);
    }
  };

  return (
    <>
      <Box sx={{ padding: 2 }}>
        {" "}
        <Filter handleFilter={handleFilter} />{" "}
      </Box>

      <ModelPopup
        open={userPopup.open}
        userData={userPopup.user}
        handleClose={handleClose}
      />
      <UserTable
        data={filterData}
        page={page}
        setPage={setPage}
        handleClickOpen={handleClickOpen}
      />
    </>
  );
}

export default App;
