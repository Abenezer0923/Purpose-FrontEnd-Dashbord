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
  import React from "react";
  import {
    MdAddTask,
    MdAttachMoney,
    MdBarChart,
    MdFileCopy,
  } from "react-icons/md";
  import CheckTable from "views/admin/Franchise/components/CheckTable";
  import YoutubeComplaxes from "views/admin/default/components/YoutubePu";
  import ComplexTable from "views/admin/default/components/ComplexTable";
  import History from "views/admin/default/components/History";
  import DailyTraffic from "views/admin/default/components/DailyTraffic";
  import PieCard from "views/admin/default/components/PieCard";
  import Tasks from "views/admin/default/components/Tasks";
  import TotalSpent from "views/admin/Franchise/components/TotalSpent";
  import WeeklyRevenue from "views/admin/Franchise/components/WeeklyRevenue";
  import {columnsDataDevelopment} from "views/admin/Franchise/variables/columnsData";
  import tableDataDevelopment from "views/admin/Franchise/variables/tableDataDevelopment.json";
  
  import {
    columnsDataCheck,
    columnsHistoryCheck,
    columnsDataComplex,
  } from "views/admin/Franchise/variables/columnsData";
  import tableDataCheck from "views/admin/Franchise/variables/tableDataCheck.json";
  import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
  import tableHistory from "views/admin/default/variables/tableHistory.json";
  import DevelopmentTable from "views/admin/Franchise/components/DevelopmentTable"
  
  export default function UserReports() {
    // Chakra Color Mode
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, "xl": 4 }}
          gap='25px'
          mb='20px' >
            
          <MiniStatistics
            name='Retail Franchise (RF)'
            value='10 Type 1 Shop'
            
          />
          <MiniStatistics
            name='Agriculture Franchise (AF)'
            value='10 Hectars'
            
          />
          <MiniStatistics
            name='Ago-Processing'
            value='5 Pooled
            franchise units'
            
          />
         
          
          <MiniStatistics
          
            name='Total Amount of Share'
            value='2935'
          />
        </SimpleGrid>
  
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
          <Box>
          <TotalSpent  mb='20px'/>
          <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
          </Box>
          <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck}  w='50%'/>
        </SimpleGrid>
        
     
      </Box>
    );
  }
  