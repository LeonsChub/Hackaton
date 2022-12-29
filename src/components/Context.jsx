import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const Context = (props) => {
    const { children } = props;

    const [modalOnSignUp,setModalOnSignUp] = useState(false);
    const [modalOnLogin,setModalOnLogin] = useState(false);
    const [modalOnEvent,setModalOnEvent] = useState(false);
    const [loggedIn,setLoggedIn] = useState(false);
    const [support, setSupport] = useState(false);
    const [needToLogin, setNeedToLogin] = useState(false);

    const [eventDate,setEventDate] = useState(null);
    const [modalEvent, setModalEvent] = useState(false);
    const [eventsArr, setEventsArr] = useState([]);

    const [eventName, setEventName] = useState([]);
    const [eventDescription, setEventDescription] = useState([]);
    const [eventFromTo, setEventFromTo] = useState([]);
    const [eventPic, setPic] = useState([]);

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
    const getEventsByDate = (date)=>{

        return( eventsArr.filter((ev)=>{
        return (
          ev.date.getFullYear() === date.year 
          && ev.date.getMonth() === date.month
          && ev.date.getDate() === date.day ) 
      }))
      
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
      pushEvent,
      getEventsByDate,
      setEventName,
      setEventDescription,
      setEventFromTo,
      setModalEvent,
      eventFromTo,
      eventDescription,
      eventName,
      setModalOnEvent,
      modalOnEvent,eventPic, setPic,setNeedToLogin,needToLogin}}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;



