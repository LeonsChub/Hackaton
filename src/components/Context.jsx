import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const Context = (props) => {
    const { children } = props;

    const [modalOnSignUp,setModalOnSignUp] = useState(false);
    const [modalOnLogin,setModalOnLogin] = useState(false);
    const [loggedIn,setLoggedIn] = useState(false);
    const [support, setSupport] = useState(false);

    const [eventDate,setEventDate] = useState(null);
    const [modalEvent, setModalEvent] = useState(false);
    const [eventsArr, setEventsArr] = useState([]);

    const handleClickedSignUp=()=>{
        setModalOnSignUp(true)
    }
    const handleClickedLogin=()=>{
        setModalOnLogin(true);
        setModalOnSignUp(false);
    }
    const handleLoggedIn=()=>{
        setLoggedIn(true)
        setModalOnLogin(false)
    }
    const handleLogOut=()=>{
        setLoggedIn(false);
    }
    const handleShowEvent = ()=>{
      setModalEvent(true);
    }
    const handleCloseEvent = ()=>{
      setModalEvent(false);
    }
    const handleClickSupport=()=>{
      setSupport(true);
    }
    const pushEvent =(newEvent)=>{
      setEventsArr((prev)=>[...prev, newEvent])
    }
  return (
    <AppContext.Provider value={
      {modalOnSignUp,
      modalOnLogin,
      loggedIn,
      handleClickedLogin,
      setModalOnSignUp,
      setModalOnLogin,
      handleLoggedIn,
      handleClickedSignUp,
      handleLogOut,
      modalEvent,
      handleShowEvent,
      handleCloseEvent,
      eventDate,
      setEventDate,
      support,
      setSupport,
      handleClickSupport,
      eventsArr,
      pushEvent,}}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;



