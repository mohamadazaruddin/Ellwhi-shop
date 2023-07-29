"use client";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { MenuIcon } from "../icons/MenuIcon";
import Sidebar from "./Sidebar";
import { SearchIcon } from "@chakra-ui/icons";
import { UserIcon } from "../icons/UserIcon";
import { HeartIcon } from "../icons/HeartIcon";

export default function Header(props: {}) {
  return (
    <Box>
      <Flex
        p="10px 30px"
        bgColor="primary.100"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        m="0"
      >
        <Flex alignItems="start" m="0">
          <Sidebar />
        </Flex>
        <Box>
          <Image src="/logo.png" width="250px" />
        </Box>
        <Flex m="0" color="#fff">
          <Flex>
            <UserIcon />
            <SearchIcon w="20px" h="20px" mx="10px" color="#fff" />
            <HeartIcon />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
