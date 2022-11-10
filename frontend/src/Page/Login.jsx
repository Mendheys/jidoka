import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast ,
} from "@chakra-ui/react";

const Login = () => {
    const toast = useToast()
  const nav = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log(user, password);
    if (user == "admin" && password == 123) {
    //   alert("success");
    toast({
        title: 'Login Successful',
        description: "",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      nav("/graph");
    } else {
        toast({
            title: 'Login Failed',
            description: "Please try again",
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
    }
  };
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
            <Text>**Hint</Text>
            <Text>User ID : admin</Text>

            <Text>password : 123</Text>

          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>User Id</FormLabel>
                <Input type="text" onChange={(e) => setUser(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  {/* <Checkbox>Remember me</Checkbox> */}
                  {/* <Link color={"blue.400"}>Forgot password?</Link> */}
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleClick}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
