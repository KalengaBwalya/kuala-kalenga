import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import DefaultAppButton from "../buttons/default";

interface VehiclesCardProps {
  title: string;
  callToAction: string;
  content: string;
}

const VehiclesCard: FC<VehiclesCardProps> = ({
  title,
  callToAction,
  content,
}) => (
  <Card m={"5px"} bg={"#e2e9e3"}>
    <CardHeader>
      <Heading size="md">{title}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{content}</Text>
    </CardBody>
    <CardFooter>
      <DefaultAppButton callToAction={callToAction} />
    </CardFooter>
  </Card>
);

export default VehiclesCard;
