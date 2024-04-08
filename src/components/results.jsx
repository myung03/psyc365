import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, Text, Button, UnorderedList, ListItem } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Page } from './export'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Results = ({curr}) => {
  const [page, setPage] = useState(0);
  const steps = [1,2,3,4]

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
        <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Results</Heading>
        <UnorderedList marginTop="24px">
          <ListItem>Results for each pair synchronization were compared to results from participants selectively chosen that were not paired together.</ListItem>
          <ListItem>Used linear mixed models for alpha, beta, gamma synchrony over time to analyze the level of performance corresponding to the level of synchronization at a specific point of time.</ListItem>
          <ListItem>T-test results and MWE analysis - the t-tests conducted in the study revealed significant differences in task performance associated with different synchrony values. Higher mean alpha synchrony was found to be associated with better performance in the task, and the dyad's mean visuospatial test score was also significantly related to alpha synchrony.</ListItem>
          <ListItem>Alpha waves - Alpha synchrony was the most consistent of results through the experiment in ROIs
            <UnorderedList>
              <ListItem>Mean synchrony was 0.010 frontal, 0.012 central, 0.011 occipital</ListItem>
              <ListItem>P-value mean difference greater than 0.051, meaning that there is no significant difference in synchrony through the experiment (phase stability)</ListItem>
              <ListItem>Alpha wave synchrony across multiple ROI qualified it as a predictor for relative task performance across participants
                <UnorderedList>
                  <ListItem>Associated with participant visuospatial test scores, suggesting an implication toward possible proficiency in the navigation of the game</ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>Beta waves - Beta synchrony was 0.039 in the occipital region - significantly higher synchrony than other ROIs
            <UnorderedList>
              <ListItem>May suggest increased synchrony in cognitive processing related to visual perception and attention in that area. Beta oscillations in the occipital region have been associated with visual processing and attentional mechanisms</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>Gamma waves - Mena gamma synchrony is highest in the occipital region (0.009), significant levels of synchrony in central compared to frontal ROI</ListItem>
        </UnorderedList>
        </>
    } else if (page == 1) {
      return <>
        <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Discussion</Heading>
      </>
    }
  }

  return (
    <>
      <section className='page'>
        {renderContent()}
        </section>
      {page > 0 && <Button leftIcon={<ArrowBackIcon/>} className='back' onClick={() => setPage(page - 1)}>Back</Button>}
      {page < 1 && <Button rightIcon={<ArrowForwardIcon/>} className='next' onClick={() => setPage(page + 1)}>Next</Button>}
    </>
  )
}

export default Results