import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, Text, Button, UnorderedList, ListItem, Grid, GridItem } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Page } from './export'
import friends from '../images/friends.png'
import track1 from '../images/track1.png'
import track2 from '../images/track2.png'
import track3 from '../images/track3.png'
import track4 from '../images/track4.png'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Methods = ({curr}) => {

  const [page, setPage] = useState(0);

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
        <Grid templateColumns='65% 35%' gap={8}>
          <GridItem>
            <UnorderedList marginTop="24px">
              <ListItem>42 subjects aged 20 to 45 years old (9 female-female, 5 female-male, 7 male-male pairs)</ListItem>
              <ListItem>All participants were right-handed and have no neurological disorders</ListItem>
              <ListItem>To ensure relative similarity of social closeness (measured with a mean rating of 4.52 ‘closeness’), they recruited pairs of friends/romantic partners (based on previous established synchronization based on familiarity)</ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem>
            <img src={friends} alt="friends" style={{width: '65%'}}/>
          </GridItem>
        </Grid>
      </>
    } else if (page == 1) {
      return <>
        <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Procedure</Heading>
        <Text marginTop="24px">During the experiment, subjects were seated in separate electrically and acoustically shielded rooms. The subjects were then individually introduced to the joint coordination task, which was a car racing game where participants attempted to navigate a racing car through various tracks by driving double-decker cars. The person on top was responsible for turning the steering wheel, while the person on the bottom operated the pedals. Subjects were informed that they would be playing the game with their pair and that they would not be able to interact with each other in other ways. They were instructed to work together and to finish as many laps as possible without interacting with each other.
        <br/><br/>While performing the task, the brain activity of the subjects was simultaneously recorded using two EEG systems (Biosemi ActiveTwo, BioSemi B.V., The Netherlands) with 64 active scalp electrodes.
        <br/>INCLUDE FIGURE 2 HERE
        </Text>
      </>
    } else if (page == 2) {
      return <>
        <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Experimental Design</Heading>
        <UnorderedList marginTop="24px">
          <ListItem>Pairs were tasked to complete a collaborative car racing game</ListItem>
          <ListItem>There were 8 runs of 90s trials and they had to complete as many laps around the track as possible</ListItem>
          <ListItem>Each person in the pair alternated roles, either controlling the speed or the direction of the virtual racing car, after each run. Each role used two letter keys (U and H or O and K)</ListItem>
          <ListItem>For the track design, the track changed with every two runs (4 unique tracks total) </ListItem>
          <Grid templateColumns='repeat(4, 1fr)' gap={8} marginTop="24px" marginBottom="24px">
            <GridItem w='80%'><img src={track1}/></GridItem>
            <GridItem w='80%'><img src={track2}/></GridItem>
            <GridItem w='80%'><img src={track3}/></GridItem>
            <GridItem w='80%'><img src={track4}/></GridItem>
          </Grid>
          <ListItem>To enhance the granularity of the experiment in measured momentary performance based on relative task progression (specific intervals in time corresponding to performance relative to the average performance over the entire game course of all trials and dyads)</ListItem>
          <ListItem>The Researchers reduced confounds of muscle artefacts that contribute to EEG patterns through a video game that reduced physical movements to small muscular actions (acceleration and steering only)</ListItem>
        </UnorderedList>
      </>
    } else if (page == 3) {
      return <>
        <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Independent Variables</Heading>
        <UnorderedList marginTop="24px">
          <ListItem>Physical isolation of participants</ListItem>
          <ListItem>Role assignment in the game - participants were assigned distinct roles of being either the accelerator or steerer</ListItem>
          <ListItem>Track - 4 different tracks for each pair of participants</ListItem>
        </UnorderedList>
        <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Dependent Variables</Heading>
        <UnorderedList marginTop="24px">
          <ListItem>Inter-brain synchronization measured through EEG, focusing on phase synchronization of oscillatory activity in various frequency bands (alpha, beta, gamma) between the brains of the cooperating participants
            <UnorderedList>
              <ListItem>Measured through CCorr, or the circular covariant coefficients that were collected from EEG signals of different waves (alpha/beta/gamma) measured for each time segment and region of interest (ROI)</ListItem>
              <ListItem>CCorr is the circular covariance that calculates the difference in the expected phase value or angles that align with synchronized participants according to the hypothesis with actual (alpha/beta/gamma) wave phases</ListItem>
              <ListItem>Mathematics works by summing the difference of the sin function of two different channels (participants) being compared; higher CCorr means that: 
                <UnorderedList>
                  <ListItem>Variability or deviation between the observed phase angles and the expected phase angles from the participant’s average phase is minimized (the overall variation and dynamics between both participants in terms of leading and lagging is the same)</ListItem>
                  <ListItem>Participant’s individual brain activity is varying at the same time as their partner, indicating higher synchrony</ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>Task performance, quantitatively assessed based on the progression of each pair’s racing car on the track, measured with the following formula: <i>p’ = (t’1 - t’2)/(T1 - T2)</i>
            <UnorderedList>
              <ListItem><i>p′</i> is the current performance value, <i>t’1</i> is the time of entering the track segment preceding the current time window, <i>t’2</i> is the time of entering the track segment succeeding the current time window and <i>T2 - T1</i> is the average time between entering the two corresponding segments on the track across all trials and dyads.</ListItem>
              <ListItem><i>p′</i> for each time interval in the game was measured relative to overall performance throughout all game performances </ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </>
    }
  }

  return (
    <>
    <section className='page'>
        {renderContent()}
        </section>
      {page > 0 && <Button leftIcon={<ArrowBackIcon/>} className='back' onClick={() => setPage(page - 1)}>Back</Button>}
      {page < 3 && <Button rightIcon={<ArrowForwardIcon/>} className='next' onClick={() => setPage(page + 1)}>Next</Button>}
    </>
  )
}

export default Methods