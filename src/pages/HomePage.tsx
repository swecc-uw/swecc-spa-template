import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box minH="100vh">
      <Container maxW="container.xl" pt={20}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
        >
          <VStack align="start" spacing={6} mb={{ base: 12, md: 0 }}>
            <Heading as="h1" size="2xl"></Heading>
            <Text fontSize="xl">Change this heading</Text>
          </VStack>

          <Box position="relative" w="300px" h="300px"></Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default HomePage;
