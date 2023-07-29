import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MenuIcon } from "../icons/MenuIcon";

export default function Sidebar(props: {}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box onClick={onOpen}>
        <MenuIcon />
      </Box>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>Sidebar</DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
