import { Box, Heading, BoxProps, Text } from "@chakra-ui/react";

type SummaryCardProps = {
  title: string;
  text: string;
} & BoxProps;

export const SummaryCard = ({ title, text, ...props }: SummaryCardProps) => {
  return (
    <Box
      as="section"
      {...props}
      p="4"
      m="2"
      borderRadius="md"
      backgroundColor="gray.100"
      boxShadow="md"
    >
      <Heading as="h3" fontSize="xl" mb="3">
        {title}
      </Heading>
      <Text>{text}</Text>
    </Box>
  );
};
