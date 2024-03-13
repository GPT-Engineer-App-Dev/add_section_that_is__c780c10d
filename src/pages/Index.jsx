import { Box, Center, Text, Fade, keyframes, css } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
// Define keyframes for the falling hearts
const fall = keyframes`
  0% { transform: translateY(-100%); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
`;

// Generate multiple animations with different delays for a more natural look
// Removed the generateAnimations function since it's no longer used

import styled from "@emotion/styled";

// Create a styled component for the falling hearts
// Apply the animations directly within the FallingHeart component using the css prop
const FallingHeart = styled(FaHeart)(() => ({
  position: "fixed",
  color: "white",
  fontSize: `${Math.random() * 1 + 0.5}rem`, // Make them smaller
  animation: `${fall} ${4 + Math.random() * 6}s linear ${Math.random() * 5}s infinite`,
  left: `${Math.random() * 100}vw`,
}));

const Index = () => {
  const textRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    observer.observe(textRef.current);
  }, []);

  return (
    <Box position="relative" h="100vh" overflow="hidden" bg="black">
      <Center position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        <Text fontFamily="monospace" fontSize="6xl" color="white">
          Lovable
        </Text>
      </Center>
      {Array.from({ length: 50 }).map((_, index) => {
        const delay = Math.random() * 5;
        const duration = 4 + Math.random() * 6;
        const leftPosition = Math.random() * 100;

        return (
          <FallingHeart
            key={index}
            style={{
              animation: `${fall} ${duration}s linear ${delay}s infinite`,
              left: `${leftPosition}vw`,
            }}
          />
        );
      })}
      <Box ref={textRef} mt="100vh" p={8}>
        <Fade in={isVisible}>
          <Text color="white" mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
          </Text>
          <Text color="white">Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nulla sit amet aliquam lacinia.</Text>
        </Fade>
      </Box>
    </Box>
  );
};

export default Index;
