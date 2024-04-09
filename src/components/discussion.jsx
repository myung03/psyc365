import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, Text, Button, UnorderedList, ListItem } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Page } from './export'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Discussion = ({curr}) => {

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
        <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Discussion</Heading>
        <Text marginTop="24px">When analyzing synchrony levels of different waves, alpha synchrony was the most consistent of results through the experiment in ROIs.
          <UnorderedList>
            <ListItem>Mean synchrony was 0.010 frontal, 0.012 central, 0.011 occipital, and P-value mean difference greater than 0.051, meaning that there is no significant difference in synchrony through the experiment (phase stability)</ListItem>
            <ListItem>Higher mean alpha synchrony was found to be associated with better performance in the task, and the dyad's mean visuospatial test score was also significantly related to alpha synchrony</ListItem>
            <ListItem>Alpha wave synchrony across multiple ROI qualified it as a predictor for relative task performance across participants. It was associated with participant visuospatial test scores, suggesting an implication toward possible proficiency in the navigation of the game</ListItem>
            <ListItem>T-test values: All mean p-values and momentary p-values were {'<'} 0.005, indicating that performance in the task has a statistically significant correlation with the level of synchrony</ListItem>
            <ListItem>Alpha waves are specifically correlated with higher level focus and attention - synchronization implies focus levels are in sync </ListItem>
          </UnorderedList>
          Beta synchrony was 0.039 in the occipital region, significantly higher synchrony than other ROIs.
          <UnorderedList>
            <ListItem>May suggest increased synchrony in cognitive processing such as problem-solving, theory of mind (mentalizaing related to visual perception and attention in that area. Beta oscillations in the occipital region have been associated with visual processing and attentional mechanisms</ListItem>
          </UnorderedList>
          Mean gamma synchrony is highest in the occipital region (0.009), with significant levels of synchrony in the central compared to frontal ROI.
          <UnorderedList>
            <ListItem>Gamma synchrony is less than beta and alpha, suggesting that cognitive load and demands across the experiment related to visuospatial analysis were similar between the two groups</ListItem>
          </UnorderedList>
        </Text>
        <Text marginTop="8px">Overall, collaboration in the task was associated with higher synchrony in the alpha, beta, and gamma bands, when comparing the synchrony between real pairs and performance-matched false pairs. The hypotheses of the researchers that cues from actions taken by the participants in the game to provide sufficient signals for activating the mechanisms underlying inter-brain synchronization were confirmed.</Text>
        </>
    }
  }

  return (
    <>
      <section className='page'>
        {renderContent()}
      </section>
    </>
  )
}

export default Discussion