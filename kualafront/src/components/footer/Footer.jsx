import { Box, Flex, Text } from "@chakra-ui/react";

const moment = require("moment");

const style = {
  textAlign: "center",
  position: "fixed",
  bottom: "0",
  height: "60px",
  width: "100%",
};

const phantom = {
  display: "block",
  height: "60px",
  width: "100%",
};

export default function Footer() {
  return (
    <footer>
      <div style={phantom}>
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
      </div>
    </footer>
  );
}
