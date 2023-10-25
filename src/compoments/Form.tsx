import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Center,
  Button,
  Box,
  Textarea,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e: { prventDefault: () => void }) => {
    e.prventDefault();
    if (emailError) {
      // Handle the form submission error, e.g., display an error message.
      console.log("Please fix the form errors.");
      return;
    }
  };
  const handleEmailChange = (event: { target: { value: any } }) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Email validation using a regular expression
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(newEmail)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <Box width={500} id="contact">
      <form onSubmit={handleSubmit}>
        <FormControl id="name">
          <FormLabel>Full Name</FormLabel>
          <Input
            type="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl id="email" mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Your Email"
            onChange={handleEmailChange}
            value={email}
          />
        </FormControl>

        <FormControl id="text" mt={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Your message"
          />
        </FormControl>

        <Button type="submit" colorScheme="teal" mt={4}>
          Submit
        </Button>
      </form>
    </Box>
  );
};
export default Form;
