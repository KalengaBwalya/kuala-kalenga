import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import VehicalsCardButton from "../buttons/VehicalsCardButton";
import { useEffect, useState } from "react";

interface VehiclesCardProps {
  title: string;
  callToAction: string;
  content: string;
  value: string[];
}

const VehiclesCard: FC<VehiclesCardProps> = ({
  title,
  callToAction,
  content,
  value,
}) => {
  const [hasValue, setHasValue] = useState<boolean>(false);
  const [cardBg, setCardBg] = useState<string>("");
  const checkValue = () => {
    if (value.length !== 0) {
      setHasValue(true);
      setCardBg("#e2e9e3");
    } else {
      setHasValue(false);
      setCardBg("#ffe2dd");
    }
  };
  useEffect(() => {
    checkValue();
    // eslint-disable-next-line
  }, [value]);

  return (
    <Card m={"5px"} bg={cardBg}>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{content}</Text>
      </CardBody>
      <CardFooter>
        <VehicalsCardButton
          callToAction={callToAction}
          hasValue={hasValue}
          title={title}
        />
      </CardFooter>
    </Card>
  );
};

export default VehiclesCard;
