import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { useToast } from "@chakra-ui/react";

interface ButtonProps {
  callToAction: string;
  isDisabled: boolean;
  title: string;
}

const VeahicalCardButton: FC<ButtonProps> = ({
  callToAction,
  isDisabled,
  title,
}) => {
  const toast = useToast();

  function toasCTAStatusMsg(isDisabled: boolean): void {
    toast.closeAll();
    if (isDisabled) {
      toastCTASuccess();
    } else {
      toastCTAError();
    }
  }

  function toastCTAError(): boolean {
    if (!toast.isActive("error-toast") && !toast.isActive("success-toast")) {
      toast.closeAll();
      toast({
        id: "error-toast",
        title: `${title} Unavailable`,
        description: `Oops... we didn't receive any ${callToAction.split(" ")[1].toLowerCase()}`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
    return false;
  }

  function toastCTASuccess(): boolean {
    if (!toast.isActive("success-toast")) {
      toast.closeAll();
      toast({
        id: "success-toast",
        title: `${title} Available`,
        description: `You are lucky we received ${callToAction.split(" ")[1].toLowerCase()}`,
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    return true;
  }

  return (
    <Button
      size="sm"
      rounded="md"
      color={isDisabled ? ["#709477"] : ["#ff6347"]}
      bg={["white"]}
      _hover={
        isDisabled
          ? {
              bg: ["#e2e9e3"],
            }
          : {
              bg: ["#ffe2dd"],
            }
      }
      onClick={() => toasCTAStatusMsg(isDisabled)}
      // isDisabled={isDisabled}
    >
      {callToAction}
    </Button>
  );
};

export default VeahicalCardButton;
