import { Button } from "@chakra-ui/react";
import { FC } from "react";

interface ButtonProps {
  callToAction: string;
}

const HeaderButton: FC<ButtonProps> = ({ callToAction }) => (
  <Button
    size="sm"
    rounded="md"
    color={["#709477"]}
    bg={["white"]}
    _hover={{
      bg: ["#e2e9e3"],
    }}
  >
    {callToAction}
  </Button>
);

export default HeaderButton;
