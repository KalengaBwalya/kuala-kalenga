import { Box, Flex, Text } from "@chakra-ui/react";
import moment from "moment";
import { FC } from "react";

const style: React.CSSProperties = {
  position: "fixed",
  bottom: "0px",
  height: "60px",
  width: "100%",
};

const Footer: FC = () => {
  return (
    <footer>
      <div style={style}>
        <Box>
          <Flex
            as={"nav"}
            align={"center"}
            justify={"space-between"}
            wrap={"wrap"}
            paddingY={"1rem"}
            paddingX={"1rem"}
            bg={"#709477"}
            color={"white"}
            boxShadow={"0px 2px 4px rgba(0,0,0,0.2)"}
          >
            <Text>© {moment().year()} KualaMoto. All rights reserved</Text>
          </Flex>
        </Box>
      </div>
    </footer>
  );
};

export default Footer;
