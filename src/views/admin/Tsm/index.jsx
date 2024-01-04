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
    Box,
    SimpleGrid,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Assets

  import React from "react";
 
  import CheckTable from "views/admin/default/components/CheckTable";
  import {columnsDataDevelopment} from "views/admin/dataTables/variables/columnsData";
  import tableDataDevelopment from "views/admin/Franchise/variables/tableDataDevelopment.json";
  
  import {
    columnsDataCheck,
    columnsHistoryCheck,
    columnsDataComplex,
  } from "views/admin/default/variables/columnsData";
  import tableDataCheck from "views/admin/Franchise/variables/tableDataCheck.json";

  import DevelopmentTable from "views/admin/Franchise/components/DevelopmentTable"
  import Ordinary from "views/admin/Ordinary/components/Ordinary";
  import Total from "views/admin/Ordinary/components/Total";
  import Voice from "views/admin/Ordinary/components/Voice";  
  export default function UserReports() {
    // Chakra Color Mode
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, "xl": 2 }}
          gap='25px'
          mb='20px' >
            
          <Ordinary />
          <Total />
        </SimpleGrid>
  
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
          <Box>
          <Voice  mb='20px'/>
          <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
          </Box>
          <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck}  w='50%'/>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        
          {/* <ComplexTable
            columnsData={columnsDataComplex}
            tableData={tableDataComplex}
          /> */}
          
          
        </SimpleGrid>
     
      </Box>
    );
  }
  