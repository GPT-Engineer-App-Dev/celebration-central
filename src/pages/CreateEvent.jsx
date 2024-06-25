import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      eventName,
      eventDate,
      eventLocation,
      eventDescription,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Create New Event</Heading>
        <FormControl id="event-name" isRequired>
          <FormLabel>Event Name</FormLabel>
          <Input value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </FormControl>
        <FormControl id="event-date" isRequired>
          <FormLabel>Event Date</FormLabel>
          <Input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        </FormControl>
        <FormControl id="event-location" isRequired>
          <FormLabel>Event Location</FormLabel>
          <Input value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
        </FormControl>
        <FormControl id="event-description">
          <FormLabel>Event Description</FormLabel>
          <Textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg">Create Event</Button>
      </VStack>
    </Container>
  );
};

export default CreateEvent;