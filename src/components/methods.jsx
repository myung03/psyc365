import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, Text, Button, Grid, GridItem, Tooltip, Step, Stepper, StepIndicator, StepStatus, StepIcon, StepNumber, StepSeparator, Box, Image, Highlight, Kbd,  Spacer,
  useDisclosure, VStack, Fade, List, ListItem } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import '../App.css'
import friends from '../images/friends.png'
import track1 from '../images/track1.png'
import track2 from '../images/track2.png'
import track3 from '../images/track3.png'
import track4 from '../images/track4.png'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Methods = ({curr}) => {

  const [page, setPage] = useState(0);
  const steps = [1,2,3,4];
  const { isOpen, onToggle } = useDisclosure();
  const [contentKey, setContentKey] = useState('independent');
  const [showContent, setShowContent] = useState(true);

  const handleSetContent = (key) => {
    if (contentKey !== key) {
      setShowContent(false);

      setTimeout(() => {
        setContentKey(key);
        setShowContent(true);
      }, 150); 
    }
  };

  const contentMap = {
    independent: (
      <>
        <Heading as='h2' size='lg' textAlign='center'>Independent Variables</Heading>
        <Text mt={2} mb={2}>There were two main independent variables in this experiement:</Text>
        <List marginTop="24px">
          <ListItem>Role assignment in the game - participants were assigned distinct roles of being either the accelerator or steerer to simulate cooperative interaction.</ListItem>
          <ListItem>Track - The game featured 4 different tracks for each pair of participants to challenge them in varied environments.</ListItem>
        </List>
      </>
    ),
    dependent: (
      <>
        <Heading as='h2' size='lg' textAlign='center'>Dependent Variables</Heading>
        <Text mt={2} mb={2}>Researchers observed the following dependent variables:</Text>
        <List marginTop="24px">
          <ListItem>Inter-brain synchronization measured through EEG, focusing on phase synchronization of oscillatory activity in various frequency bands (alpha, beta, gamma) between the brains of the cooperating participants.
            <List paddingLeft="40px">
              <ListItem>Measured through 
                <Tooltip hasArrow label="CCorr is the circular covariance that calculates the difference in the expected phase value or angles that align with synchronized participants according to the hypothesis with actual (alpha/beta/gamma) wave phases" aria-label="Tooltip for CCorr">
                  <span style={{ textDecoration: "underline" }}> CCorr</span>
                </Tooltip>, or the circular covariant coefficients collected from EEG signals.
              </ListItem>
              <ListItem>Higher CCorr indicates a smaller difference between the expected and actual timing of brainwaves, suggesting closely matched brain activities (synchronization).</ListItem>
            </List>
          </ListItem>
          <ListItem>Task performance, quantitatively assessed based on the progression of each pair’s racing car on the track. Performance metrics included efficiency and speed, contributing to a comprehensive evaluation of cooperative task success.</ListItem>
        </List>
      </>
    ),
    controls: (
      <>
        <Heading as='h2' size='lg' textAlign='center'>Controls</Heading>
        <Text mt={2} mb={2}>The study implemented the following controls to ensure the validity of the results:</Text>
        <List marginTop="24px">
          <ListItem>Physical Isolation of Participants - By placing participants in separate rooms, the study controlled for any direct physical interaction that might influence inter-brain synchronization.</ListItem>
          <ListItem>False Pairs for Comparison - The study utilized performance-matched false pairs as a control to distinguish the effects of cooperative interaction from mere simultaneous activity performance.</ListItem>
          <ListItem>Role Designation - Specific roles (accelerator or steerer) were assigned to control for the potential confounding effects of task demands on brain activity.</ListItem>
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
      <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Participants</Heading>
      <Grid templateColumns='70% 30%' gap={6} marginTop="24px">
        <GridItem>
          <Text mb={4}>
            Participants consisted of 42 volunteers, recruited through email lists and social media, who were friends or romantic couples from the University of Helsinki or others interested in participating. They were chosen to ensure a level of social closeness, under the assumption that it might affect inter-brain synchronization.
          </Text>
          <Text>
            In the study, <Highlight query='physically isolated participants performed a collaborative coordination task' styles={{ px: '2', py: '1', rounded: 'md', bg: 'orange.100' }}>physically isolated participants performed a collaborative coordination task</Highlight> in the form of a cooperative multiplayer game, controlling a car on a screen by pressing buttons for speed or direction. This setup was chosen to help answer the research question by investigate inter-brain synchronization in a controlled yet socially interactive setting without physical presence.
          </Text>
        </GridItem>
        <GridItem display="flex" alignItems="center" justifyContent="center">
          <Box className="floating">
            <Image src={friends} alt="friends" style={{ maxWidth: '70%', height: 'auto', marginLeft:"2em" }} />
          </Box>
        </GridItem>
      </Grid>
    </>
    
    } else if (page == 1) {
      return  (<>
      <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Procedure</Heading>
      <Text marginTop="24px">
        The study employed a quasi-experimental design focusing on within-subject comparisons. Participants engaged in a cooperative multiplayer game, allowing researchers to <Highlight query="inter-brain synchronization" styles={{ px: '2', py: '1', rounded: 'md', bg: 'teal.100' }}> observe inter-brain synchronization</Highlight> without the participants being physically present with each other. The design specifically aimed to measure <Tooltip hasArrow label="Electroencephalography (EEG) is a non-invasive method to record electrical activity of the brain. It's used here to measure neural synchrony between participants." aria-label="Tooltip for EEG">
          <span style={{ textDecoration: "underline" }}>EEG</span>
        </Tooltip>-based neural synchrony as participants interacted through a virtual environment, addressing the research questions related to the effects of virtual cooperative interaction on inter-brain synchronization and its impact on task performance.
        <br/><br/>
        During the experiment, subjects were seated in separate electrically and acoustically shielded rooms. The subjects were then individually introduced to the joint coordination task, which was a car racing game where participants attempted to navigate a racing car through various tracks by driving double-decker cars. The person on top was responsible for turning the steering wheel, while the person on the bottom operated the pedals. Subjects were informed that they would be playing the game with their pair and that they would not be able to interact with each other in other ways. They were instructed to work together and to finish as many laps as possible without interacting with each other.
        <br/><br/>
        While performing the task, the brain activity of the subjects was simultaneously recorded using <Highlight query="two EEG systems" styles={{ px: '2', py: '1', rounded: 'md', bg: 'orange.100' }}> two EEG systems</Highlight> (Biosemi ActiveTwo, BioSemi B.V., The Netherlands) with 64 active scalp electrodes.
      </Text>
    </>)
    } else if (page == 2) {
      return <>
      <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Experimental Design</Heading>
      <Text marginTop="24px">
        The study engaged pairs in a cooperative car racing game over 8 runs of 90-second trials, aiming for as many laps as possible. To add variability, roles for controlling speed and direction with keys <Kbd>U</Kbd> + <Kbd>H</Kbd> / <Kbd>O</Kbd> + <Kbd>K</Kbd> were alternated between partners after each run. Additionally, Track designs changed every two runs, introducing four unique courses to challenge participants beyond course memorization.
      </Text>
      <Grid templateColumns='repeat(4, 1fr)' gap={8} marginBottom="24px">
        <GridItem w='80%'><img src={track1} alt="Track 1" style={{ borderRadius: "8px" }}/></GridItem>
        <GridItem w='80%'><img src={track2} alt="Track 2" style={{ borderRadius: "8px" }}/></GridItem>
        <GridItem w='80%'><img src={track3} alt="Track 3" style={{ borderRadius: "8px" }}/></GridItem>
        <GridItem w='80%'><img src={track4} alt="Track 4" style={{ borderRadius: "8px" }}/></GridItem>
      </Grid>
      <Text mt={4}>
        Aiming for granular analysis, the study measured performance at specific moments to provide a detailed look at momentary performance, contrasting with the average performance metric across all trials. <Tooltip hasArrow label="Granularity refers to the level of detail or precision used in the measurement of data. In this context, it means analyzing performance based on specific moments within the task, rather than averaging performance across all participants and trials." aria-label="Tooltip for Granularity">
          <span style={{ textDecoration: "underline", cursor: "help" }}>Granularity</span>
        </Tooltip> was prioritized to uncover insights on task progression and inter-brain synchronization effects.
      </Text>
      <Text mt={4}>
        The game minimized physical movement, focusing on small actions for acceleration and steering to reduce muscle artifacts in EEG recordings, ensuring data reflected cognitive rather than physical activity.
      </Text>
    </>
    
    } else if (page === 3) {
      return    <>
            <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Experimental Variables</Heading>
       <Grid templateColumns="30% 70%" gap={4} pt="100px" w="full">
      <GridItem>
        <VStack spacing="4" align="start">
          <Button colorScheme="blue" w="full" onClick={() => handleSetContent('independent')}>Independent Variables</Button>
          <Button colorScheme="teal" w="full" onClick={() => handleSetContent('dependent')}>Dependent Variables</Button>
          <Button colorScheme="green" w="full" onClick={() => handleSetContent('controls')}>Controls</Button>
        </VStack>
      </GridItem>
      <GridItem>
        <Fade in={showContent}>
          <Box p="5" shadow="md" bg="white" rounded="md" minH="60vh">
            {contentMap[contentKey]}
          </Box>
        </Fade>
      </GridItem>
    </Grid>
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
      {page < 3 && <Button rightIcon={<ArrowForwardIcon/>} className='next' onClick={() => setPage(page + 1)}>Next</Button>}
    </>
  )
}

export default Methods