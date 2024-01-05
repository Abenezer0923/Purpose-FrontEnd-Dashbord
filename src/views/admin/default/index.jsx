/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
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

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const [franchiseData, setFranchiseData] = useState({
    name: "Franchise",
    value: "Loading...",
    growth: "buy",
  });

  const [ordinaryData, setOrdinaryData] = useState({
    name: "Ordinary",
    value: "Loading...",
    growth: "buy",
  });

  const [tsmData, setTsmData] = useState({
    name: "TSM",
    value: "Loading...",
    growth: "buy",
  });

  const [totalData, setTotalData] = useState({
    name: "Total",
    value: "Loading...",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.purposeblacketh.com/api/shareHolder/dashBoard/");
        const data = await response.json();
        console.log("Abbbccc", data.completedShareInfo.numberOfShare)

        // Update state with fetched data
        setFranchiseData({
          name: "Franchise",
          value: data.completedShareInfo.numberOfShare,
          growth: "buy",
        });

        setOrdinaryData({
          name: "Ordinary",
          value: data.ordinary.toString(),
          growth: "buy",
        });

        setTsmData({
          name: "TSM",
          value: data.tsm.toString(),
          growth: "buy",
        });

        setTotalData({
          name: "Total",
          value: data.total.toString(),
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors as needed
      }
    };

    // Call fetchData when the component mounts
    fetchData();
  }, []); 
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        gap="25px"
        mb="20px"
      >
        <MiniStatistics {...franchiseData} />
        <MiniStatistics name="Ordinary" value="0" growth="buy" />
        <MiniStatistics name="TSM" value="2500" growth="buy" />

        <MiniStatistics name="Total" value="2935" />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
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
}
