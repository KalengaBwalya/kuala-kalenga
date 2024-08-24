import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

// VehiclesCard function for rendering Vehicles data
const VehiclesCard = ({ name, data, cta }) => (
  <Card m={"5px"}>
    <CardHeader>
      <Heading size="md">{name}</Heading>
    </CardHeader>
    <CardBody>
      <Text>
        {data.length} Active {cta.split(" ")[1]}
      </Text>
    </CardBody>
    <CardFooter>
      <Button>{cta}</Button>
    </CardFooter>
  </Card>
);

export default VehiclesCard;
