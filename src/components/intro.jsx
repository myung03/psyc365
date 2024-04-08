import React from 'react';
import { useState, useEffect } from 'react';
import {
  Heading, Text, Button, VStack, HStack, Highlight, Link, Tooltip, Collapse, Box, useColorModeValue, ScaleFade, Step, Stepper, StepIndicator, StepStatus, StepIcon, StepNumber, StepSeparator
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Intro = ({curr}) => {
  const [page, setPage] = useState(0);
  const [show, setShow] = useState(false);

  const bg = useColorModeValue("purple.500", "purple.700");
  const color = useColorModeValue("white", "gray.200");

  const steps = [1,2,3,4]

  const handleToggle = () => setShow(!show);
  useEffect(() => {
    if (curr !== 0) {
      setPage(0);
    }
  }, [curr]);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    scrollToTop();
  }, [page]);

  const renderContent = () => {
    if (page === 0) {
      return (
        <VStack spacing={4} p="5">
          <Heading as='h2' size='lg' textAlign='center' marginTop='4'>
            Project Introduction
          </Heading>
          <Text textAlign="center" lineHeight="taller">
            Hi there - we're Janaye, Indira and Matthew, and we built this website for our PSYC 365 Project! The project is based on a paper titled <Highlight query='Inter-brain synchronization occurs without physical co-presence during cooperative online gaming' styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange.100' }}>Inter-brain synchronization occurs without physical co-presence during cooperative online gaming</Highlight>, and is a collaborative effort to help readers gain insights into the incredible work done by the authors. Published in <Highlight query='Neuropsychologia' styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>Neuropsychologia</Highlight>, 2022, it explores the nuances of interpersonal synchronization in digital interactions. You can view the citation to see more information about the authors, journal, and year, and access the paper through the options below. Throughout this website, hover over the underlined terms to learn more about them!
          </Text>
          <HStack spacing={10}>
            <Tooltip hasArrow label="Wikström, V., Saarikivi, K., Falcon, M., Makkonen, T., Martikainen, S., Putkinen, V., Cowley, B. U., & Tervaniemi, M. (2022). Inter-brain synchronization occurs without physical co-presence during cooperative online gaming. Neuropsychologia, 174, 108316. https://doi.org/10.1016/j.neuropsychologia.2022.108316" bg="blue.100" color="black">
              <Link href="#" onClick={(e) => {e.preventDefault(); alert('Citation Information');}} color="teal.500" isExternal>
                Citation
              </Link>
            </Tooltip>
            <Link href="https://www.sciencedirect.com/science/article/pii/S0028393222001750#sec6" isExternal color="teal.500">
              Link to Paper
            </Link>
          </HStack>
        </VStack>
      );
    } else if (page == 1) {
      return (
        <>
  <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Overview</Heading>
  <VStack textAlign="center" marginTop="24px" spacing={4}>
    <Text>
      This research delves into <Highlight query='intrapersonal synchronization' styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}>intrapersonal synchronization</Highlight>, focusing on how individuals coordinate simultaneous or closely timed actions. The concept of 
      <Tooltip hasArrow label="Inter-brain synchrony refers to the synchronization of brain activities among individuals, which can be measured through various neurophysiological metrics." aria-label="Tooltip for Inter-brain Synchrony">
        <span style={{ textDecoration: "underline" }}> inter-brain synchrony</span>
      </Tooltip> emerges as a pivotal area of study, exploring how collaborative tasks influence the temporal dynamics and oscillatory activity within and between brains.
    </Text>
    <Text>
      Historically, examining the 
      <Tooltip hasArrow label="Temporal dynamics involve changes in neural activity over time, reflecting how brain processes evolve and interact during tasks." aria-label="Tooltip for Temporal Dynamics">
        <span style={{ textDecoration: "underline" }}> temporal dynamics</span>
      </Tooltip> and 
      <Tooltip hasArrow label="Oscillatory activity refers to the rhythmic or repetitive neural activity that can be measured in various brain regions, often associated with different types of cognitive and social processes." aria-label="Tooltip for Oscillatory Activity">
        <span style={{ textDecoration: "underline" }}> oscillatory activity</span>
      </Tooltip> of individuals engaged in joint efforts has been central to understanding this phenomenon. It has been discovered that the level of 
      <Tooltip hasArrow label="Neural coupling is the mechanism by which the brain regions synchronize in response to stimuli, facilitating coordinated cognitive processes among individuals." aria-label="Tooltip for Neural Coupling">
        <span style={{ textDecoration: "underline" }}> neural coupling</span>
      </Tooltip> during such interpersonal synchronization is strongly linked to enhanced social bonding, cooperation, and team performance.
    </Text>
  </VStack>
</>
      );
    } else if (page === 2) {
      return (
        <>
  <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Knowledge Gap</Heading>
  <VStack textAlign="center" marginTop="24px" spacing={4}>
    <Text>
      Prior studies have successfully identified a clear correlation between 
      <Highlight query='inter-brain synchrony' styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange.100' }}>
        inter-brain synchrony
      </Highlight> and positive social outcomes during physical interactions. However, the dynamics of this synchrony through digital interfaces remain largely unexplored, despite the surge in online social interactions.
    </Text>
    <Text>
      This uncharted territory presents a unique opportunity to investigate if the benefits of synchronization, such as social cohesion, can be 
      <Highlight query='replicated or even amplified in digital collaborative environments' styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>replicated or even amplified in digital collaborative environments</Highlight>. With the world increasingly leaning towards virtual interactions, addressing this gap is not only of academic interest but also holds significant social relevance.
    </Text>
  </VStack>
</>
      )
    } else if (page === 3) {
      return (
        <VStack spacing={4} p={5} align="center">
        <Button mt={10} size="lg" onClick={handleToggle} colorScheme="purple">
          Let's ask the big picture question...
        </Button>
        <ScaleFade in={show} initialScale={0.7}>
          <Box
            p="40px"
            color={color}
            mt="4"
            bg={bg}
            rounded="md"
            shadow="xl"
            textAlign="center"
            borderWidth="3px"
            borderColor="purple.200"
            transform="scale(1.05)"
            transition="all 0.3s ease-in-out"
          >
            <Heading as="h2" size="xl" mb={4} decoration="underline">
            </Heading>
            <Heading as="h3" size="xl"fontWeight="bold"  mb={4} >
              How does online/virtual collaboration impact inter-brain synchrony and corresponding prosocial performance?
            </Heading>
          </Box>
        </ScaleFade>
      </VStack>
      )
    } 
  };

  return (
    <>
      <section className='page'>
        <Stepper index={page}>
        {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
          <StepSeparator />
        </Step>
      ))}
        </Stepper>
        {renderContent()}
      </section>
      {page > 0 && <Button leftIcon={<ArrowBackIcon/>} className='back' onClick={() => setPage(page - 1)}>Back</Button>}
      {page < 3 && <Button rightIcon={<ArrowForwardIcon/>} className='next' onClick={() => setPage(page + 1)}>Next</Button>}
    </>
  );
}

export default Intro;
