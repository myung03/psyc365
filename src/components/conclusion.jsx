import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, Text, Button, UnorderedList, ListItem, Step, Stepper, StepIndicator, StepStatus, StepIcon, StepNumber, StepSeparator } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Page } from './export'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Conclusion = ({curr}) => {

  const [page, setPage] = useState(0);
  const steps = [1,2]

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
        <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Critique</Heading>
        <UnorderedList marginTop="24px">
          <ListItem>Volunteers were recruited through email lists and social media in pairs of friends or romantic couples among students of the University of Helsinki and others interested in participating in the study. The social closeness the participants had with each other, as well as mostly coming from the same background (i.e. attending the same university) could have a unique effect on inter-brain synchronization and not be representative of broader, more varied relationships, thus limiting the generalizability of the study.</ListItem>
          <ListItem>2 pairs were discarded due to EEG malfunction, indiciating other possible sources of systematic error
            <UnorderedList>
              <ListItem>Recorded deviations included performance value reflecting longer duration than actual EEG data</ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
        </>
    } else if (page == 1) {
      return <>
        <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Conclusion and Future Directions</Heading>
        <UnorderedList marginTop="24px">
          <ListItem>Overall, the researcher's results indicate that increased inter-brain synchrony is related to improved collaborative task performance.</ListItem>
          <ListItem>Significance in examining results is associated with the following:
            <UnorderedList>
              <ListItem>Optimization of virtual multi-user environments (ie. software and virtual call environments due to context of Covid-19)</ListItem>
              <ListItem>Development of virtual activities and tasks that enhance synchronization between individuals</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>Future studies could investigate the effects of inter-brain synchrony in a larger, more diverse population to determine if the results are consistent across different relationships.</ListItem>
          <ListItem>It would also be interesting to explore the effects of inter-brain synchrony on various tasks to determine if the results are task-specific or if they can be generalized to other types of digital collaborative activities.</ListItem>
          <ListItem>In conclusion, synchrony plays a sufficient role in online interaction and it would be interesting to see future studies that continue to study its impact among digital social environments.</ListItem>
        </UnorderedList>
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