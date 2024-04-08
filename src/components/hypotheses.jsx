import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, Text, Button } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Page } from './export'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Hypotheses = ({curr}) => {

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
        <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Research questions/Hypotheses</Heading>
        <Text marginTop="24px">Interpersonal synchronization occurs when individuals perform simultaneous or closely timed actions together. The extent of inter-brain synchrony between individuals has historically been measured by comparing the temporal dynamics and oscillatory activity of individuals during collaborative tasks; research has shown that the level of neural coupling during interpersonal synchronization between individuals is correlated with an increase in social bonding, cooperation, and team performance.</Text>
        </>
    } else if (page == 1) {
      return <>
        <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Knowledge Gap</Heading>
        <Text marginTop="24px">However, previous research has only studied synchronization between people physically interacting and has not yet investigated the effects of synchronization when humans are not able to observe each other directly and instead through a digital interface. It is valuable to study this, with social interaction increasingly happening on online platforms, to observe if social cohesion is still facilitated even under these circumstances.</Text>
      </>
    } else if (page == 2) {
      return <>
        <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Big Picture Question</Heading>
        <Text marginTop="24px">How does online/virtual collaboration impact inter-brain synchrony and corresponding prosocial performance?</Text>
        <Heading as='h2' size='lg' textAlign='center' >Hypothesis</Heading>
        <Text marginTop="24px">Shared attention, interaction, and cooperation in the real-time online game would produce inter-brain synchrony, measured as the circular correlation coefficient (CCorr) of different frequencies within electrodes in specific canonical networks (frontal, frontocentral, central, temporoparietal, parietal and occipital regions).</Text>
      </>
    }
  }

  return (
    <>
      <section className='page'>
        {renderContent()}
      </section>
      {page > 0 && <Button leftIcon={<ArrowBackIcon/>} className='back' onClick={() => setPage(page - 1)}>Back</Button>}
      {page < 2 && <Button rightIcon={<ArrowForwardIcon/>} className='next' onClick={() => setPage(page + 1)}>Next</Button>}
    </>
  )
}

export default Hypotheses