import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

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
  <Card m={"5px"}>
    <CardHeader>
      <Heading size="md">{title}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{content}</Text>
    </CardBody>
    <CardFooter>
      <Button>{callToAction}</Button>
    </CardFooter>
  </Card>
);

export default VehiclesCard;
