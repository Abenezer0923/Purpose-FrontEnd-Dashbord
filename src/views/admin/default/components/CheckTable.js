import {
  Flex,
  Table,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Popover,
  useDisclosure,
  PopoverTrigger,
  Button,
  ModalCloseButton
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";

const bgButton = "d7a022";
export default function CheckTable(props) {
  const { columnsData, tableData } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState(null);


  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  return (
    <Card
      direction='column'
      w='100%'
      px='0px'
      overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex px='25px' justify='space-between' align='center'>
        {/* <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'>
          Check Table
        </Text> */}
        {/* <Menu /> */}
        <Button
            bg={`#${bgButton}`}
            ml='auto'
            fontSize='sm'
            fontWeight='500'
            color="#ffff"
            borderRadius='7px'>
           
            Show All
          </Button>
      </Flex>
      <Table {...getTableProps()} variant='simple'     css={`
          tbody tr:hover {
            background-color: rgba(0, 0, 0, 0.05);
            cursor: pointer;
          }
        `} color='gray.500' mb='24px' >
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe='10px'
                  key={index}
                  borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.Header === "History") {
                    data = (
                      <Flex align='center'>
                        <Checkbox
                          defaultChecked={cell.value[1]}
                          colorScheme='brandScheme'
                          me='10px'
                        />
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {cell.value[0]}
                        </Text>
                      </Flex>
                    );
                  } else if (cell.column.Header === "PAYMENTMETHOD") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  }
                  else if (cell.column.Header === "PAIDAMOUNT") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  }
                  else if (cell.column.Header === "QUANTITY") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  }  else if (cell.column.Header === "DATE") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  }
                  return (
                    <><Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor='transparent'>
                      {data}
                    </Td><Modal
                      isOpen={isOpen}
                      onClose={() => {
                        onClose();
                        setSelectedOption(null);
                      } }
                      isCentered
                      size="xl"
                      maxH="650px"
                    >
                        <ModalOverlay />
                        <ModalContent>
                          <ModalCloseButton />
                          <Flex
                            justify="space-between"
                            ps="0px"
                            pe="20px"
                            pt="5px"
                            flexDirection={{ base: "column", lg: "row" }}
                            alignItems={{ base: "center", lg: "flex-start" }}
                          >
                            <ModalBody>
                              <Popover>
                                <PopoverTrigger>
                                  <Text
                                    color={textColor}
                                    fontWeight="bold"
                                    fontSize={{ base: "3xl", lg: "4xl" }}
                                    lineHeight="150%"
                                    mt={{ base: 0, lg: "3rem" }}
                                    ml={{ base: 0, lg: "3rem" }}
                                    mb="2rem"
                                    textAlign={{ base: "center", lg: "3rem" }}
                                  >
                                    Please Complete
                                    <br />
                                    Remaining Payment!
                                    <br />
                                  </Text>
                                </PopoverTrigger>
                              </Popover>
                            </ModalBody>
                          </Flex>
                        </ModalContent>
                      </Modal></>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}