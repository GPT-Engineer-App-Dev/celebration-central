import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Textarea } from "@chakra-ui/react";

const BookTickets = () => {
  const [numTickets, setNumTickets] = useState(1);
  const [attendeeNames, setAttendeeNames] = useState([""]);
  const [contactInfo, setContactInfo] = useState("");

  const handleNumTicketsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumTickets(value);
    setAttendeeNames(Array(value).fill(""));
  };

  const handleAttendeeNameChange = (index, value) => {
    const newAttendeeNames = [...attendeeNames];
    newAttendeeNames[index] = value;
    setAttendeeNames(newAttendeeNames);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      numTickets,
      attendeeNames,
      contactInfo,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Book Tickets</Heading>
        <FormControl id="num-tickets" isRequired>
          <FormLabel>Number of Tickets</FormLabel>
          <Input type="number" min="1" value={numTickets} onChange={handleNumTicketsChange} />
        </FormControl>
        {attendeeNames.map((name, index) => (
          <FormControl key={index} id={`attendee-name-${index}`} isRequired>
            <FormLabel>Attendee Name {index + 1}</FormLabel>
            <Input value={name} onChange={(e) => handleAttendeeNameChange(index, e.target.value)} />
          </FormControl>
        ))}
        <FormControl id="contact-info" isRequired>
          <FormLabel>Contact Information</FormLabel>
          <Textarea value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg">Book Tickets</Button>
      </VStack>
    </Container>
  );
};

export default BookTickets;