import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />

      <Heading>Ooops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page dose not exist."
          : "An unexpected error"}
      </Text>
    </>
  );
};
