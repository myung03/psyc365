import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, Text, Button, UnorderedList, List, Tooltip, ListItem, Step, Stepper, StepIndicator, StepStatus, StepIcon, StepNumber, Highlight,StepSeparator, Box, Grid, GridItem, VStack, Fade, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Page } from './export'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Conclusion = ({curr}) => {

  const [page, setPage] = useState(0);
  const steps = [1,2]
  const [contentKey, setContentKey] = useState('Strengths');
  const [showContent, setShowContent] = useState(true);

  const handleSetContent = (key) => {
    setShowContent(false);
    setTimeout(() => {
      setContentKey(key);
      setShowContent(true);
    }, 150);
  };

  const contentMap = {
    Strengths: (
      <>
        <Heading as="h2" size="lg" textAlign="center">Strengths of the Study</Heading>
        <Text mt={2} mb={2}>The study demonstrated several strengths:</Text>
        <List spacing={3} marginTop="24px">
          <ListItem>Innovative Design - Employing a cooperative multiplayer game to investigate inter-brain synchronization without physical co-presence, enhancing understanding of virtual collaboration.</ListItem>
          <ListItem>Controlled Manipulation - Utilization of real and false pairs to examine the effects of virtual cooperation on neural synchronization, minimizing confounding factors.</ListItem>
          <ListItem>Focus on EEG Measures - Application of EEG for precise, real-time monitoring of neural activity, enabling detailed analysis of synchronization across brain regions and frequency bands.</ListItem>
        </List>
      </>
    ),
    Weaknesses: (
      <>
        <Heading as="h2" size="lg" textAlign="center">Weaknesses of the Study</Heading>
        <Text mt={2} mb={2}>The study encountered several limitations:</Text>
        <List spacing={3} marginTop="24px">
          <ListItem>Generalizability - The specific participant demographic may restrict the broader applicability of the findings.</ListItem>
          <ListItem>Single Task Focus - Concentration on a singular cooperative driving game might not fully capture the range of virtual collaborative interactions.</ListItem>
          <ListItem>Lack of Behavioral Measures - Reliance solely on EEG omitted behavioral and subjective assessments, which could provide further insights into collaboration dynamics.</ListItem>
        </List>
      </>
    ),
    Rigour: (
      <>
        <Heading as="h2" size="lg" textAlign="center">Rigour and Appropriateness of Methods</Heading>
        <Text mt={5} mb={2}>The methods employed were rigorous and appropriate for the research questions posed. The quasi-experimental design and the use of EEG as a measure of inter-brain synchronization were well-suited to explore the nuances of virtual cooperative interaction. However, the study could have been strengthened by a more diverse participant sample and by exploring a variety of collaborative tasks.</Text>
      </>
    ),
    FutureResearch: (
      <>
        <Heading as="h2" size="lg" textAlign="center">Questions for Future Directions</Heading>
        <Text mt={2} mb={2}>Future research could explore:</Text>
        <List spacing={3} marginTop="24px">
          <ListItem>Variations in inter-brain synchronization across different collaborative tasks and environments.</ListItem>
          <ListItem>Consistency of synchronization and performance outcomes across diverse populations and groups without prior social connections.</ListItem>
          <ListItem>The impact of prolonged collaboration in virtual settings on synchronization and performance.</ListItem>
          <ListItem>Potential interventions or game designs to enhance inter-brain synchronization and collaborative outcomes.</ListItem>
        </List>
      </>
    ),
  };
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
        <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Critiques</Heading>
        <Box>
      <Grid templateColumns="30% 70%" gap={4} pt="4" w="full">
        <GridItem>
          <VStack spacing="4" align="start">
            <Button colorScheme="blue" w="full" onClick={() => handleSetContent('Strengths')}>Strengths</Button>
            <Button colorScheme="red" w="full" onClick={() => handleSetContent('Weaknesses')}>Weaknesses</Button>
            <Button colorScheme="purple" w="full" onClick={() => handleSetContent('Rigour')}>Rigour</Button>
            <Button colorScheme="green" w="full" onClick={() => handleSetContent('FutureResearch')}>Future Research</Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Fade in={showContent}>
            <Box p="5" shadow="md" bg="white" rounded="md">
              {contentMap[contentKey]}
            </Box>
          </Fade>
        </GridItem>
      </Grid>
    </Box>
        </>
    } else if (page == 1) {
      return <>
      <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Conclusion</Heading>
      <Text mt={4}>
        The study's findings <Highlight query="highlight the critical role of inter-brain synchrony in enhancing collaborative task performance" styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange.100' }}>highlight the critical role of inter-brain synchrony in enhancing collaborative task performance</Highlight>, underscoring its potential to optimize virtual multi-user environments. This is particularly relevant in the context of COVID-19, where digital collaboration has become increasingly paramount. The development of virtual activities and tasks designed to enhance synchronization between individuals emerges as a significant area of focus, offering avenues to fortify online interactions and improve collective task outcomes.
      </Text>
      <Text mt={4}>
        In essence, synchrony plays a foundational role in online interactions, suggesting that future studies should continue to explore its impact within digital social environments. The overarching take-home message emphasizes the <Highlight query="transformative power of inter-brain synchrony in redefining collaborative experiences" styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>transformative power of inter-brain synchrony in redefining collaborative experiences</Highlight>, pointing to a future where enhanced synchronization could lead to more effective and meaningful virtual collaborations.
      </Text>
      <Alert status="success" variant="solid" rounded="md" mt={3} mb={5}>
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Thank you for exploring our website!</AlertTitle>
          <AlertDescription>
            We hope you enjoyed this paper as much as we did - we loved building this project and sharing our insights with you! 
          </AlertDescription>
        </Box>
      </Alert>
    </>
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

export default Conclusion