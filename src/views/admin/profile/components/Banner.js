// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";

export default function Banner(props) {
  const { banner, avatar, name, job, posts, followers, following } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center">
      <Box
        bg={`url(${banner})`}
        bgSize="cover"
        borderRadius="16px"
        h="231px"
        w="100%"
      />
      <Avatar
        mx="auto"
        src={avatar}
        h="87px"
        w="87px"
        mt="-43px"
        border="4px solid"
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="10px">
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        {job}
      </Text>
      <Flex w={{ base: "90%", md: "70%", lg: "50%", xl: "40%" }} mx="auto" mt="26px" direction="column">
  <Flex mx="auto">
    <Text color={textColorSecondary} fontSize="xl" fontWeight="500">
      Email
    </Text>
    <Text color={textColorSecondary} fontSize="sm" fontWeight="400" ml={{ base: "1rem", md: "15rem" }}>
      info@purposeblack.et
    </Text>
  </Flex>
  <Flex mx="auto" mt="1rem" align="center">
    <Text color={textColorSecondary} fontSize="xl" fontWeight="400">
      Phone
    </Text>
    <Text color={textColorSecondary} fontSize="sm" fontWeight="400" ml={{ base: "1rem", md: "15rem" }}>
      +251 946 545454
    </Text>
  </Flex>
  <Flex mx="auto" mt="1rem" align="center">
    <Text color={textColorSecondary} fontSize="xl" fontWeight="400">
      Address
    </Text>
    <Text color={textColorSecondary} fontSize="sm" fontWeight="400" ml={{ base: "0.5rem", md: "3rem" }}>
      Sengatera Negadewoch Hibret BLDG, Addis Ababa
    </Text>
  </Flex>
</Flex>

    </Card>
  );
}
