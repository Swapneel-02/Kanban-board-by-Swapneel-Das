import axios from 'axios';
import React, { useEffect, useCallback, useState } from 'react';
import Navbar from './Navbar';
// import './../styles/homepage.css';
import Dashboard from './Dashboard';
import { loadGrid, mapUsersByUserId } from '../utils/helperGrouping';

const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

const Homepage = () => {

    // const [tickets, setTickets] = useState([]);
    // const [groupOption, setGroupOption] = useState('none');
    // const [sortOption, setSortOption] = useState('none');

    // const keys = useMemo(() => Object.keys(gridData), [gridData]);

    // //Fetching data from the API
    // useEffect(() => {
    //     const fetchCards = async() => {
    //         try{
    //             const response = await axios.get(API_URL);
    //             console.log(response.data);
    //             if(response.data && Array.isArray(response.data.tickets)){
    //                 setTickets(response.data.tickets);
    //             }
    //             else{
    //                 console.error("Unexpected data format")
    //             }
    //         }
    //         catch(error){
    //             console.error(error)
    //         }
    //     }
    //     fetchCards();
    // },[]);

    // useEffect(() => {
    //     const savedGroupOption = localStorage.getItem('groupOption');
    //     const savedSortOption = localStorage.getItem('sortOption');
    //     if (savedGroupOption) setGroupOption(savedGroupOption);
    //     if (savedSortOption) setSortOption(savedSortOption);
    //   }, []);
    
    //   useEffect(() => {
    //     localStorage.setItem('groupOption', groupOption);
    //     localStorage.setItem('sortOption', sortOption);
    //   }, [groupOption, sortOption]);

    // const groupTickets = (tickets) => {
    //     if (!Array.isArray(tickets)) return {}; // Ensure tickets is an array
    //     switch (groupOption) {
    //       case 'user':
    //         return groupByUser(tickets);
    //       case 'priority':
    //         return groupByPriority(tickets);
    //       default:
    //         return groupByStatus(tickets);
    //     }
    //   };

    //   const groupByStatus = (tickets) => {
    //     return tickets.reduce((acc, ticket) => {
    //       const { status } = ticket;
    //       acc[status] = acc[status] || [];
    //       acc[status].push(ticket);
    //       return acc;
    //     }, {});
    //   };
    
    //   const groupByUser = (tickets) => {
    //     return tickets.reduce((acc, ticket) => {
    //       const { userId } = ticket;
    //       acc[userId] = acc[userId] || [];
    //       acc[userId].push(ticket);
    //       return acc;
    //     }, {});
    //   };
    
    //   const groupByPriority = (tickets) => {
    //     return tickets.reduce((acc, ticket) => {
    //       const { priority } = ticket;
    //       acc[priority] = acc[priority] || [];
    //       acc[priority].push(ticket);
    //       return acc;
    //     }, {});
    //   };

    //   const sortTickets = (tickets) => {
    //     if (!Array.isArray(tickets)) return []; // Ensure tickets is an array
    //     switch (sortOption) {
    //       case 'title':
    //         return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
    //       default:
    //         return [...tickets].sort((a, b) => b.priority - a.priority);
    //     }
    //   };


      // const groupedTickets = groupTickets(tickets);

    // const renderGroupedTickets = () => {
    //     return Object.keys(groupedTickets).map((groupKey) => (
    //     <div className="column" key={groupKey}>
    //         <h2>{groupKey}</h2>
    //         {sortTickets(groupedTickets[groupKey]).map((ticket) => (
    //         <div className="ticket" key={ticket.id}>
    //             <h3>{ticket.title}</h3>
    //             <p>Status: {ticket.status}</p>
    //             <p>User: {ticket.userId}</p>
    //             <p>Priority: {ticket.priority}</p>
    //         </div>
    //         ))}
    //     </div>
    //     ));
    // };

  const [tickets, setTickets] = useState([]);
  const [userData, setUserData] = useState({});
  const [gridData, setGridData] = useState({});
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");
  // const [loading, setLoading] = useState(true);

    useEffect(() => {
      loadSettings();
      const fetchTickets = async () => {
        try {
          const response = await axios.get(API_URL);
          const { tickets, users } = response.data;
          setTickets(tickets);
          setUserData(mapUsersByUserId(users));
        } catch (error) {
          console.error(error);
        }
      }
      fetchTickets();
    }, [])
  
    useEffect(() => {
      if (!tickets.length)
        return;
      setGridData(loadGrid(tickets, grouping, ordering));
      // setLoading(false);
    }, [grouping, ordering, tickets])
  
    const onSetGrouping = useCallback((value) => {
      // setLoading(true);
      setGrouping(value);
      saveSettings({ grouping});
    }, []);
  
    const onSetOrdering = useCallback((value) => {
      // setLoading(true);
      setOrdering(value);
      saveSettings({ ordering });
    }, []);
  
    const saveSettings = useCallback((data) => {
      for (let key in data)
        localStorage.setItem(key, data[key]);
    }, []);
  
    const loadSettings = useCallback(() => {
      setGrouping(localStorage.getItem("grouping") || "status");
      setOrdering(localStorage.getItem("ordering") || "priority");
    }, []);



    return (
        <>
        <Navbar grouping={grouping} setGrouping={onSetGrouping} ordering={ordering} setOrdering={onSetOrdering} />
        <div className='dashboard'>
            <Dashboard gridData={gridData} grouping={grouping} userIdToData={userData} />
        </div>
      </>
    );
    };

export default Homepage;
