import { Container, VStack, Heading, Text, Button, Box, Image } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to EventMaster
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your ultimate platform for managing and organizing events effortlessly.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/event-management.png" alt="Event Management" />
        </Box>
        <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" size="lg">
          View Events
        </Button>
        <Button as={Link} to="/create-event" leftIcon={<FaPlus />} colorScheme="blue" size="lg">
          Create New Event
        </Button>
        <Button as={Link} to="/book-tickets" leftIcon={<FaPlus />} colorScheme="green" size="lg">
          Book Tickets
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;