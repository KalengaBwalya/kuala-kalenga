import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { useToast } from "@chakra-ui/react";

interface ButtonProps {
  callToAction: string;
  hasValue: boolean;
  title: string;
}

const VehicalsCardButton: FC<ButtonProps> = ({
  callToAction,
  hasValue,
  title,
}) => {
  const toast = useToast();

  function toastCTAStatusMsg(hasValue: boolean): void {
    toast.closeAll();
    if (hasValue) {
      toastCTASuccess();
    } else {
      toastCTAError();
    }
  }

  function toastCTAError(): void {
    if (
      !toast.isActive(`error-${callToAction.split(" ")[1].toLowerCase()}-toast`)
    ) {
      toast.closeAll();
      toast({
        id: `error-${callToAction.split(" ")[1].toLowerCase()}-toast`,
        title: `${title} Unavailable`,
        description: `Oops... we haven't received any ${callToAction.split(" ")[1].toLowerCase()}`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  }

  function toastCTASuccess(): void {
    if (
      !toast.isActive(
        `success-${callToAction.split(" ")[1].toLowerCase()}-toast`,
      )
    ) {
      toast.closeAll();
      toast({
        id: `success-${callToAction.split(" ")[1].toLowerCase()}-toast`,
        title: `${title} Available`,
        description: `You are lucky we received ${callToAction.split(" ")[1].toLowerCase()}`,
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  }

  return (
    <Button
      size="sm"
      rounded="md"
      color={hasValue ? ["#709477"] : ["#ff6347"]}
      bg={["white"]}
      _hover={
        hasValue
          ? {
              bg: ["#e2e9e3"],
            }
          : {
              bg: ["#ffe2dd"],
            }
      }
      onClick={() => toastCTAStatusMsg(hasValue)}
    >
      {callToAction}
    </Button>
  );
};

export default VehicalsCardButton;
