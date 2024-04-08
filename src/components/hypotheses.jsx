import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, Highlight, VStack, ScaleFade, Box, Button, useColorModeValue, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
Stepper, Step, StepIndicator, StepNumber, StepIcon, StepStatus, StepSeparator } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Hypotheses = ({curr}) => {
  const [page, setPage] = useState(0);
  const [show, setShow] = useState(false);
  const steps = [1, 2]

  const bg = useColorModeValue("blue.500", "blue.700");
  const color = useColorModeValue("white", "gray.200");

  const handleToggle = () => setShow(!show);
  useEffect(() => {
    if (curr !== 0) {
      setPage(0);
    }
  }, [curr]);

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
      return <>
         <VStack spacing={4} p={5} align="center">
        <Button mt={10} size="lg" onClick={handleToggle} colorScheme="blue">
          Now, what was their research question? 
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
            borderColor="blue.200"
            transform="scale(1.05)"
            transition="all 0.3s ease-in-out"
          >
            <Heading as="h2" size="xl" mb={4} decoration="underline">
            </Heading>
            <Heading as="h3" size="xl"fontWeight="bold"  mb={4} >
            Do physically isolated participants engaging in a cooperative multiplayer game exhibit inter-brain phase synchronization, and how does synchronization correlate with their performance in the collaborative task?
            </Heading>
          </Box>
        </ScaleFade>
      </VStack>
        </>
    } else if (page === 1) {
      return (<Box p={5}>
        <Heading as="h2" size="lg" textAlign="center" mb={4}>
          Hypothesis
        </Heading>
        <Accordion allowToggle allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Main Hypothesis (Hypothesis 1)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              The study hypothesized that <Highlight query='cooperative action by physically isolated participants' styles={{ px: '2', py: '1', rounded: 'md', bg: 'green.100' }}>cooperative action by physically isolated participants</Highlight> would lead to inter-brain phase synchronization during a collaborative multiplayer game.
            </AccordionPanel>
          </AccordionItem>
      
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Connection to Performance (Hypothesis 2)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Additionally, it hypothesized that such synchronization is <Highlight query='connected to performance' styles={{ px: '2', py: '1', rounded: 'md', bg: 'yellow.100' }}>connected to performance</Highlight> in the collaborative task, expecting to find positive links between <Highlight query='inter-brain synchrony and task performance' styles={{ px: '2', py: '1', rounded: 'md', bg: 'yellow.100' }}>inter-brain synchrony and task performance</Highlight>.
            </AccordionPanel>
          </AccordionItem>
      
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Broader Implications
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              These hypotheses aimed to <Highlight query='understand the dynamics of inter-brain synchronization' styles={{ px: '2', py: '1', rounded: 'md', bg: 'red.100' }}>understand the dynamics of inter-brain synchronization</Highlight> in a context devoid of physical co-presence and direct communication, focusing on the effects of mediated virtual interaction on <Highlight query='neural coupling and its impact on cooperative task success' styles={{ px: '2', py: '1', rounded: 'md', bg: 'red.100' }}>neural coupling and its impact on cooperative task success</Highlight>.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      )
    } 
  }

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
      {page < 1 && <Button rightIcon={<ArrowForwardIcon/>} className='next' onClick={() => setPage(page + 1)}>Next</Button>}
    </>
  )
}

export default Hypotheses