import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, Text, Button, Highlight, Box, Image, Grid, GridItem, Step, Stepper, StepIndicator, StepStatus, StepIcon, StepNumber, StepSeparator, Tooltip, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure, } from '@chakra-ui/react'
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
  const steps = [1,2,3]

  const { isOpen, onOpen, onClose } = useDisclosure();
  
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
        <GridItem w="100%">
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Synchrony Levels in Different ROIs (CCorr vs. Hz)  (Figure 3) 
            </Text>
            <Text mt={2}>
              Analyzing EEG data, synchronization in individuals during virtual tasks was <Tooltip label="Circular covariance coefficients quantify the degree of phase synchrony between EEG signals" aria-label="Tooltip for CCorr"><span style={{ textDecoration: "underline", cursor: "help" }}>quantified as circular covariance coefficients (CCorr)</span></Tooltip>, compared against control pairs chosen based on similar performance. 
            </Text>
            <Text mt={2}>
              <Tooltip hasArrow label="False Discovery Rate - adjusts for multiple comparisons to reduce the risk of type I errors" aria-label="Tooltip for FDR"><span style={{ textDecoration: "underline", cursor: "help" }}>FDR-corrected t-tests</span></Tooltip> were employed to identify significant synchrony differences between collaborative and control pairs across ROIs. Significant findings were noted in the frontal, central, parietal, and occipital lobes, with p &lt; 0.05. This underscores the impact of virtual collaboration on cortical structures linked to visuospatial processing, attention, and sensory integration.
            </Text>
          </Box>
        </GridItem>

        <GridItem w="100%">
          <Image
            src={figure3}
            alt="Synchrony Levels Visualization"
            boxSize="100%"
          />
        </GridItem>
      </Grid>
    </>
    } else if (page == 1) {

      return <>
      <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Results</Heading>
    
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
        <GridItem w="100%">
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Linear Mixed Models for Alpha, Beta, and Gamma Synchrony (Figure 2) 
            </Text>
            <Text mt={2}>
              Temporal dynamics of inter-brain synchrony for alpha, beta, and gamma waves were assessed using a <Tooltip label="Mixed regression models account for both fixed and random variables to analyze data sets with multiple observations of the same subjects." aria-label="Tooltip for Mixed Regression Model"><span style={{ textDecoration: "underline", cursor: "help" }}>linear mixed regression model</span></Tooltip>. This analysis covered two experiment blocks, each representing different game tracks.
            </Text>
            <Text mt={2}>
              <Highlight query="Significantly, synchrony levels were higher in block 2" styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange.100' }}>Significantly, synchrony levels were higher in block 2</Highlight>, suggesting enhanced coordination and familiarity with the task. This increment indicates improved participant synchronization due to task familiarity, communication, and coordination.
            </Text>
            <Text mt={2}>
              Despite initial increases, a consistent <Tooltip label="A negative linear regression indicates a decrease in the dependent variable as the independent variable increases, commonly seen in studies assessing performance over time." aria-label="Tooltip for Negative Linear Regression"><span style={{ textDecoration: "underline", cursor: "help" }}>negative linear regression</span></Tooltip> for alpha, beta, and gamma synchrony pointed to a gradual decline in EEG concurrence over time, across all trials. This pattern reflects the complex temporal dynamics, possibly influenced by fatigue or shifting attention.
            </Text>
            <Text mt={2}>
              Notably, beta waves exhibited the most pronounced decline in synchrony, emphasizing a significant drop in inter-brain coordination as the experiment progressed.
            </Text>
          </Box>
        </GridItem>
    
        <GridItem w="100%">
          <Image
            src={figure4}
            alt="Linear Regression Models"
            objectFit="fit"
            boxSize="100%"
          />
        </GridItem>
      </Grid>
    </>
    
    } else if (page == 2) {
      return <>
      <Heading as='h2' size='lg' textAlign='center' marginTop='30px'>Results</Heading>

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
  <GridItem w="100%">
    <Box>
      <Heading as="h3" size="lg" fontWeight="bold">
        Continuous Predictors of Performance and WAIS on Mean Levels of Alpha, Beta, and Gamma Synchrony (Table 1)
      </Heading>
      <Text mt={2}>
        Using <Tooltip label="IBM SPSS (Statistical Package for the Social Sciences) is a powerful software package used for complex statistical data analysis, widely utilized in social science research for its extensive range of statistical analysis capabilities." aria-label="Tooltip for IBM SPSS"><span style={{ textDecoration: "underline", cursor: "help" }}>IBM SPSS</span></Tooltip>, task performance and visuospatial skills (measured with the <Tooltip label="WAIS (Wechsler Adult Intelligence Scale) is a widely used test designed to measure human intelligence through various cognitive tasks, emphasizing visuospatial skills among other cognitive abilities." aria-label="Tooltip for WAIS"><span style={{ textDecoration: "underline", cursor: "help" }}>WAIS</span></Tooltip>) were analyzed as predictors of mean synchrony levels in alpha, beta, and gamma bands. Table 1 summarizes beta coefficients, standard errors, F-values, p-values, and confidence intervals.
      </Text>
      <Text mt={2}>
        Synchrony levels were notably higher in block 2, indicating increased inter-brain coordination due to task familiarity and improved participant interaction. 
      </Text>
      <Text mt={2}>
        <Highlight query="Significance of performance on alpha band was confirmed with p = 0.031" styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange.100' }}>Significance of performance on alpha band was confirmed with p = 0.031</Highlight>, suggesting a meaningful impact, whereas beta and gamma bands showed more variability. F-values from <Tooltip label="ANOVA (Analysis of Variance) is a statistical method used to analyze the differences among group means in a sample. It provides a way to check if the means of several groups are equal, and it's particularly useful for comparing three or more samples or groups." aria-label="Tooltip for ANOVA"><span style={{ textDecoration: "underline", cursor: "help" }}>ANOVA</span></Tooltip> highlighted task performance as a significant predictor of alpha synchrony (F = 5.52), with beta (F = 0.97) and gamma (F = 0.25) less impacted. Higher F-values indicate a stronger effect on inter-brain dynamics.
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
      <GridItem w="100%">
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Continuous predictors of Time, Performance and WAIS on Momentary Alpha, Beta, and Gamma Synchrony (Table 2)
          </Text>
          <Text mt={2}>
            To achieve higher granularity in experimental results, <Highlight query="researchers evaluated the continuous predictors referenced in Table 1" styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange.100' }}>researchers evaluated the continuous predictors referenced in Table 1</Highlight>on momentary levels of alpha, beta, and gamma inter-synchrony, adding the variable of time as a potential predictor.
          </Text>
          <Text mt={2}>
            As corroborated by <Button onClick={onOpen} variant="link" colorScheme="blue" textDecoration="underline">Figure 2</Button> and the negative regression over each of the three frequency bands, time as a continuous predictor displayed the most significant statistical impact on instantaneous beta synchrony (F=133.11, p = 0.001) in comparison to candidate predictors of performance, WAIS, and WAIS difference. Preprocessed data that was not input into the above table also demonstrated that the <Highlight query="temporal dynamics of beta synchrony were dependent on the region examined" styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>temporal dynamics of beta synchrony were dependent on the region examined</Highlight> (F=47.97, p &lt; 0.001).
          </Text>
          <Text mt={2}>
            Out of the three bands, gamma synchrony was statistically correlated with higher momentary performance (F=4.06, p =0.044) and also impacted by specific ROI (F=7.57, p &lt; 0.001). Time displayed a more pronounced impact on the decrease on momentary gamma synchrony (F = 34.84) than the previous analysis in <Button onClick={onOpen} variant="link" colorScheme="blue" textDecoration="underline">Figure 2</Button> on overall mean gamma synchrony.
          </Text>
          <Text mt={2}>
            Alpha-synchrony levels displayed <Highlight query="statistical significance in both time and visuospatial skills as continuous predictors" styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.100' }}>statistical significance in both time and visuospatial skills as continuous predictors</Highlight> for lower momentary CCorr values, suggesting that alpha waves operated on a form of joint coordination outside of individual visual processing.
          </Text>
        </Box>
      </GridItem>

      {/* Modal for Figure 2 */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Figure 2: Wave Synchrony Over Time</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={figure4} alt="Beta Synchrony Over Time" />
          </ModalBody>
        </ModalContent>
      </Modal>
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
      {page < 2 && <Button rightIcon={<ArrowForwardIcon/>} className='next' onClick={() => setPage(page + 1)}>Next</Button>}
    </>
  )
}

export default Results