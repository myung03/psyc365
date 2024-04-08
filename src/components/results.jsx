import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, Text, Button, UnorderedList, ListItem, Box, Image, Grid, GridItem} from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Page } from './export'
import { RESULTS } from '../texts/export'
import { figure3 } from '../images/export'
import { figure4 } from '../images/export'
import { table1 }  from '../images/export'
import { table2 } from '../images/export'

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

    {/* figure 4 */}

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

    {/* tables */}


      <Grid
  alignContent={'center'}
  justifyContent={'center'}
  templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
  gap={5}
  p={5}
  borderColor="black" 
  borderWidth="1px" 
  borderRadius="lg" 
  overflow="hidden"
  marginBottom={10}
  marginTop={10}
>
  <GridItem w="100%">
    <Image
      src={table1}
      alt="Table 1 Visualization"
      objectFit="contain" // Changed for consistency
      boxSize="100%"
      mt={-18}
    />
  </GridItem>

  <GridItem w="100%">
    <Image
      src={table2}
      alt="Table 2 Visualization"
      objectFit="contain" // Changed for consistency
      boxSize="100%"
      mt={10}
    />
  </GridItem>
</Grid>

 {/* table 1 */}

  <Grid
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
          Continuous Predictors of Performance and WAIS on Mean Levels of Alpha, Beta, and Gamma Synchrony (Table 1)
          </Text>
          <Text mt={2}>
          After fitting the model through IBM SPSS, researchers evaluated the validity of task performance (p`) as well as visuospatial skills measured on the Wechsler Adult Intelligence Scale (WAIS) as continuous predictors on mean synchrony levels. Table 1 presents the beta coefficients, standard errors, F-values, p-values, and confidence intervals associated with these components in a linear mixed model of alpha, beta, and gamma synchrony. 
          </Text>
          <Text mt={2}>
          Each of the alpha, beta, and gamma synchrony exhibited a higher level of inter-brian synchrony during block 2 compared to block 1; the increase in synchrony from the first to the second block indicates that after an experience with joint coordination task in the first half of the experiment, participant pairs experienced an increase in inter-brain synchrony for the remaining trials. The increase in oscillation synchrony can be attributed to familiarity with the online task, enhanced communication techniques, and improved coordination between participants. 
          </Text>
          <Text mt={2}>
          F-values derived from ANOVA tests on predictors vs. mean CCorr revealed that the task performance variable was strongest in predicting alpha synchrony out of three bands (F = 5.52) followed by beta synchrony (F = 0.97) and gamma synchrony (0.25). The F-values reflect the extent to which a specific performance component impacts inter-brain dynamics relative to random variation, with higher F-values suggesting a stronger relationship. Therefore, the results suggest that task performance is most strongly linked to alpha coordination compared to beta and gamma bands.
          </Text>
          <Text mt={2}>
          P-values derived from t-tests describe similar results regarding the significance of the performance predictor on alpha frequency bands (p = 0.031 &lt; 0.05), while beta and gamma bands exhibit a higher probability of being influenced by random variation. 
          </Text>
       
        </Box>
      </GridItem>
      </Grid>

      {/* table 2 */}

  <Grid
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
          Continuous predictors of Time, Performance and WAIS on Momentary Alpha, Beta, and Gamma Synchrony (Table 2)
          </Text>
          <Text mt={2}>
          To achieve higher granularity in the results of the experiment, researchers evaluated the continuous predictors referenced in Table 1 on momentary levels of alpha, beta, and gamma inter-synchrony, adding the variable of time as a potential predictor. 
          </Text>
          <Text mt={2}>
          As corroborated by Figure 2 and the negative regression over each of the three frequency bands, time as a continuous predictor displayed the most significant statistical impact on instantaneous beta synchrony (F=133.11, p = 0.001) in comparison to candidate predictors of performance, WAIS, and WAIS difference. Preprocessed data that was not input into the above table also demonstrated that the temporal dynamics of beta synchrony were dependent on the region examined (F=47.97, p &lt; 0.011). 
          </Text>
          <Text mt={2}>
          Out of the three bands, gamma synchrony was statistically correlated with higher momentary performance (F=4.06, p =0.044) and also impacted by specific ROI (F=7.57, p &lt; 0.001). Time displayed a more pronounced impact on the decrease on momentary gamma synchrony (F = 34.84) than the previous analysis in Figure 2 on overall mean gamma synchrony. 
          </Text>
          <Text mt={2}>
          Alpha-synchrony levels displayed statistical significance in both time and visuospatial skills as continuous predictors for higher momentary CCorr values; the increase of time was associated with lower momentary alpha inter-synchrony (F = 8.42, p = 0.004) while visuospatial proficiency was found to have a positive effect on alpha synchrony within participant pairs. 
          </Text>
       
        </Box>
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