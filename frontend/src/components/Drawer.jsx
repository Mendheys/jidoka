import {
  Button,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
  Drawer as ChakaraDrawer
} from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";

const Drawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
        Menu
      </Button>
      <ChakaraDrawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            {/* <Input placeholder="Type here..." /> */}
            <Link to={"/"}>Login page</Link>
            <br /><br />
            <Link to={"/graph"}>Bar Graph page</Link>
            <br /><br />
            <Link to={"/product"}>Add Product page</Link>
            

          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            
          </DrawerFooter>
        </DrawerContent>
      </ChakaraDrawer>
    </>
  );
};

export default Drawer;
