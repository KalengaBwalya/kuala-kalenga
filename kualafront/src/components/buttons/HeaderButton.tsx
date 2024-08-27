import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { useToast } from "@chakra-ui/react";

interface ButtonProps {
  callToAction: string;
}

const HeaderButton: FC<ButtonProps> = ({ callToAction }) => {
  const toast = useToast();

  function toastCTAStatusMsg(callToAction: string): void {
    if (!toast.isActive(`sign-up-toast`)) {
      toast.closeAll();
      toast({
        id: `sign-up-toast`,
        title: `${callToAction} Unavailable`,
        description: "Under construction...",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  }
  return (
    <Button
      size="sm"
      rounded="md"
      color={["#709477"]}
      bg={["white"]}
      _hover={{
        bg: ["#e2e9e3"],
      }}
      onClick={() => toastCTAStatusMsg(callToAction)}
    >
      {callToAction}
    </Button>
  );
};

export default HeaderButton;
