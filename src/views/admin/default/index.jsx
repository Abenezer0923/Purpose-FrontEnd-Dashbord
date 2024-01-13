import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React, { useState, useEffect } from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import YoutubeComplaxes from "views/admin/default/components/YoutubePu";
import ComplexTable from "views/admin/default/components/ComplexTable";
import History from "views/admin/default/components/History";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";

import {
  columnsDataCheck,
  columnsHistoryCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import tableHistory from "views/admin/default/variables/tableHistory.json";
import useFetch from "hooks/fetch.hook";
import axios from "axios";
import create from "zustand";

const UserReports = async () =>{
  // Chakra Color Mode
  // const brandColor = useColorModeValue("brand.500", "white");
  // const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  // const [{ isLoading, apiData, serverError }] = await useFetch();
  
  
  const [getData, setData] = useState({ isLoading : false, apiData: ' ...', status: null, serverError: null })
  // Inside your fetchData function in useFetch.js
  let token = localStorage.getItem('token')

  
    
      
      const headers = {
        Authorization: `${token}`,
      };
      
     const data = await axios.get('https://api.purposeblacketh.com/api/shareHolder/dashBoard/', { headers })
      // .then(resp => {
      //   setData({
      //     ...getData,

      //     isLoading: false,
      //     apiData: resp.data,
      //     status: resp.status, 
      //   });
      //   console.log("The Response: ", resp)
      // })
      // .catch(err => {
      //   console.log("Error : ", err)
      // });
  
      // if (status === 200) {
   
  
      //   // Log the updated state after the setData callback
      //   console.log("token Api", {
      //     ...getData,
      //     apiData: data,
      //     status: status,
      //   });
      // }
     
  
  console.log("apiData demo", data.data);
  

  



  // const [res, setRes] = useState({
  //   obj: " ",
  // });

  // const [franchiseData, setFranchiseData] = useState({
  //   name: "Franchise",
  //   value: "Loading...",
  //   growth: "buy",
  // });

  // const [ordinaryData, setOrdinaryData] = useState({
  //   name: "Ordinary",
  //   value: "Loading...",
  //   growth: "buy",
  // });

  // const [tsmData, setTsmData] = useState({
  //   name: "TSM",
  //   value: "Loading...",
  //   growth: "buy",
  // });

  // const [totalData, setTotalData] = useState({
  //   name: "Total",
  //   value: "Loading...",
  // });

  
    // Handle loading, errors, or use apiData as needed
    if (getData.isLoading) {
      console.log("Loading data...");
    } else if (getData.apiData) {
      // Update state with fetched data

      setFranchiseData((prevData) => ({
        ...prevData,
        value: getData.apiData.completedShareInfo[1]?.numberOfShare || "0",
      }));
      console.log("Aman ", getData.apiData.payment_history.slice(0, 3));
      // setRes((pr) => ({
      //   ...pr,
      //   obj: getData.apiData.payment_history.slice(0, 3),
      // }));

      setOrdinaryData((prevData) => ({
        ...prevData,
        value: getData.apiData.completedShareInfo[0]?.numberOfShare || "0",
      }));

      setTsmData((prevData) => ({
        ...prevData,
        value: getData.apiData.completedShareInfo[2]?.numberOfShare || "0",
      }));

      setTotalData((prevData) => ({
        ...prevData,
        value:
          parseInt(franchiseData.value) +
          parseInt(ordinaryData.value) +
          parseInt(tsmData.value),
      }));
    }  if (getData.serverError) {
      console.error("Error fetching data:", getData.serverError);
    }
  
  

    if(getData.isLoading) return <h1>isLoading</h1>;
  if(getData.serverError) return <h1>{getData.serverError.message}</h1>

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        gap="25px"
        mb="20px"
      >
        <MiniStatistics {...franchiseData} />
        <MiniStatistics {...ordinaryData} />
        <MiniStatistics {...tsmData} />

        <MiniStatistics {...totalData} />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        {/* <CheckTable columnsData={columnsDataCheck} tableData={res.obj} /> */}
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <History columnsData={columnsHistoryCheck} tableData={tableHistory} />

        <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px">
          <YoutubeComplaxes
            columnsData={columnsDataComplex}
            tableData={tableDataComplex}
          />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
};

export default UserReports;
