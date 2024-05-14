import { Container, VStack, Heading, Text, Box, Image, HStack, IconButton, Link } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const newsArticles = [
  {
    title: "Consultancy Team Wins Prestigious Award",
    date: "October 10, 2023",
    description: "Our consultancy team has been awarded the prestigious XYZ award for excellence in consulting services.",
    image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhd2FyZCUyMGNlcmVtb255fGVufDB8fHx8MTcxNTcxOTAwMXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "New Office Opening in New York",
    date: "September 25, 2023",
    description: "We are excited to announce the opening of our new office in New York City to better serve our clients.",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXclMjBvZmZpY2V8ZW58MHx8fHwxNzE1NzE5MDAyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Consultancy Team Expands to Europe",
    date: "August 15, 2023",
    description: "Our consultancy team is expanding its operations to Europe with new offices in London and Berlin.",
    image: "https://images.unsplash.com/photo-1579158949482-3e9e0ac69333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxldXJvcGUlMjBleHBhbnNpb258ZW58MHx8fHwxNzE1NzE5MDAzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Consultancy Team News
        </Heading>
        {newsArticles.map((article, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <HStack spacing={4}>
              <Image boxSize="150px" objectFit="cover" src={article.image} alt={article.title} />
              <VStack align="start" spacing={2}>
                <Heading as="h2" size="md">
                  {article.title}
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  {article.date}
                </Text>
                <Text>{article.description}</Text>
              </VStack>
            </HStack>
          </Box>
        ))}
        <HStack spacing={4} justify="center" pt={8}>
          <Link href="https://twitter.com" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
