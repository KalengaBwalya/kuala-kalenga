import { Box, Text } from "@chakra-ui/react";
import { BoxProps } from "@chakra-ui/react";

interface LogoProps extends BoxProps {}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        KualaMoto
      </Text>
    </Box>
  );
};

export default Logo;
