import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, Text, Button, UnorderedList, ListItem, Box, Image, Grid, GridItem} from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Page } from './export'
import { RESULTS } from '../texts/export'
import { figure3 } from '../images/export'
import { figure4 } from '../images/export'

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

        {/* figure 3 */}
      
      <Grid
      templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
      p={5}
      borderColor="black" 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden"
      marginBottom={10}
      marginTop={10}
      >
      <GridItem w="100%"
      >
        <Box>
          <Text fontSize="lg" fontWeight="bold">
          Synchrony Levels in Different ROIs (CCorr vs. Hz)  (Figure 3) 
          </Text>
          <Text mt={2}>
            Primary results assessed the synchronization levels of isolated individuals that interacted over virtual collaborative tasks using EEG data, quantified as circular covariance coefficients (CCorr). Additionally, synchronization values were obtained from control pairs that were not matched for collaboration and were selected solely based on comparable performance metrics (performance-matched pairs).
          </Text>
          <Text mt={2}>
          The comparison of collaborative vs. control pairs was used to conduct FDR-corrected t-tests, which determined whether there was a significant difference in synchrony between control and experimental groups specific to regions of interest (frontal, frontocentral, central, temporoparietal, parietal, and occipital lobes). Black dots on the x-axis describe specific frequencies wherein p-values derived from FDR-corrected t-tests of both groups yielded significant differences 
            (p &lt; 0.05). The results showed a significant difference in frontal, central, parietal, and occipital lobes corresponding to visuospatial processing, attention, and sensory integration, implying that pairing over virtual interfaces significantly impacts synchrony within cortical structures involved with visuospatial integration, attention, and processing.           
          </Text>
          
        </Box>
      </GridItem>

      <GridItem w="100%">
        <Image
          src={figure3}
          alt="Synchrony Levels Visualization"
          objectFit="cover"
          boxSize="100%"
        />
      </GridItem>
    </Grid>

    {/* figure 3 */}

    <Grid
      templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
      p={5}
      borderColor="black"
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      marginBottom={10}
      marginTop={10}
      >
      <GridItem w="100%"
      >
        <Box>
          <Text fontSize="lg" fontWeight="bold">
          Linear Mixed Models for Alpha, Beta, and Gamma Synchrony (Figure 2) 
          </Text>
          <Text mt={2}>
          The temporal dynamics of inter-brain synchrony were observed and averaged over every brain region for respective alpha, beta, and gamma waves across all paired trials. A linear and mixed regression model was leveraged to distinguish trends over two blocks of the experiment: block one represented the first two designated tracks of the game, while block two represented the latter two.  
          </Text>
          <Text mt={2}>
          Each of the alpha, beta, and gamma synchrony exhibited a higher level of inter-brian synchrony during block 2 compared to block 1; the increase in synchrony from the first to the second block indicates that after an experience with joint coordination task in the first half of the experiment, participant pairs experienced an increase in inter-brain synchrony for the remaining trials. The increase in oscillation synchrony can be attributed to familiarity with the online task, enhanced communication techniques, and improved coordination between participants. 
          </Text>
          <Text mt={2}>
          Throughout the experiment, a consistent negative linear regression model was fitted for alpha, beta, and gamma CCorr values indicating a decline in EEG concurrence over time. Despite a notable difference in overall synchrony levels between the two blocks, both block one and block two exhibited a similar negative slope, suggesting a consistent decrease in synchrony across all three frequency bands through all tracks and trials. This trend may be attributed to the enduring temporal dynamics and the potential influence of factors such as fatigue or shifts in attention during the experiment. 
          </Text>
          <Text mt={2}>
          Among the three frequency bands, beta waves stood out with the most pronounced negative slope, highlighting a significant decrease in inter-brain coordination among participants as the experiment progressed.
          </Text>
        </Box>
      </GridItem>
      
      <GridItem w="100%">
        <Image
          src={figure4}
          alt="Linear Regression Models"
          objectFit="cover"
          boxSize="100%"
        />
      </GridItem>

    </Grid>

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