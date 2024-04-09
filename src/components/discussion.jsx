import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, Text, Button, UnorderedList, ListItem } from '@chakra-ui/react'
import { Image, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'
import { Page } from './export'
import { alpha, beta, gamma, communication } from '../images/export'

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


        <Heading as='h2' size='lg' textAlign='center' marginTop='30px' marginBottom= '40px'>Discussion</Heading>
 
    

        <Accordion>
        <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontSize="lg" fontWeight="bold">Overall Findings</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Text>
      The findings of the study present strong evidence that virtual collaboration can effectively foster synchrony among participants, as demonstrated by significant results across various regions of interest (ROIs) and frequency bands (alpha, beta, and gamma) of brain waves. Despite the lack of face-to-face interaction and physical proximity among participant pairs, the act of coordinating and sharing tasks within virtual environments was enough to elicit statistically significant differences in both mean and momentary synchrony levels, as shown in Figure 3. This was particularly evident when comparing cooperative pairs with a shared task against control pairs selected based on performance alone. Notably, task performance emerged as a crucial predictor of alpha wave synchrony, suggesting that the success of collaboration is intimately linked with the participants’ ability to align their brain activity within the alpha band, which is associated with states of attention and relaxation. Furthermore, factors such as time and visuospatial skills underscore how both external conditions and individual-specific characteristics influence the temporal dynamics of brain wave activity and the distribution of cognitive resources between collaborative engagement and individual attention spans. The focus of this study on real-time task performance highlights how individuals engaged in social tasks navigate concurrent attentional and inhibitory processes, managing motor actions while remaining cognizant of their partner's behaviors and intentions. This research opens up new frontiers for investigating virtual tasks that impose lower cognitive demands in the motor and perceptual realms, probing into how processes like mentalization and theory of mind function within networked environments and online social platforms. An in-depth analysis of the implications for each of the three oscillation bands is provided in the subsequent discussion.
      </Text>

      <Image  alignSelf='center' blockSize={300} marginTop='20px' marginBottom='20px' src={communication}></Image>
     
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontSize="lg" fontWeight="bold">Alpha Waves</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Text>
     Throughout the experiment, the inter-synchrony of alpha waves exhibited the strongest statistical significance and stability across various regions of interest. The t-test results showed that both mean p-values and momentary p-values associated with alpha waves were below 0.005, indicating a statistically significant correlation between performance and higher CCorr values. The mean alpha synchrony values in CCorr were 0.010, 0.012, and 0.011 in the frontal, central, and occipital lobes, respectively, suggesting that EEG coordination in these areas was linked to enhanced cognitive function related to attention and visual perception. Furthermore, the mean alpha waves yielded mean p-value differences exceeding 0.054, indicating that there was no statistically significant variance between each ROI, and relative maintenance of alpha synchrony in whole-brain networks. 
     </Text>
     <Text>
     Interestingly, the significance of dyad mean visuospatial test scores from the WAIS was associated with lower inter-synchrony of alpha waves, suggesting that individual cognitive focus and attention may operate independently of joint coordination on alpha frequencies. Considering the existing research highlighting the influence of alpha waves on executive functions, including inhibitory control and focused attention, these findings reveal a nuanced interplay between alpha wave synchrony and cognitive performance. Specifically, the positive correlation between alpha wave synchrony and task performance underscores the potential for synchronized neural activity to enhance cognitive functions related to attentional processes and sensory integration. This relationship suggests that cooperative or shared attentional states, facilitated by alpha synchrony, may amplify the cognitive capabilities necessary for complex tasks. Conversely, the inverse relationship between alpha wave synchrony and individual visuospatial test scores hints at the intricate balance between collective cognitive dynamics and individual cognitive processes. The results raise intriguing questions about the extent to which individual attentional and executive functions are modulated or even optimized in social or collaborative contexts, as opposed to solitary conditions. 
     </Text>
     <Text>
     These findings pave the way for future investigations into the specific cognitive mechanisms that are enhanced through interpersonal neural synchronization, and how individual concentration and focus are uniquely achieved and maintained. This exploration is essential for unraveling the complex interdependencies between shared and individual cognitive processes, potentially leading to novel insights into enhancing cognitive function through targeted interventions that leverage the power of neural synchrony.
     </Text>
     <Image src={alpha}></Image>
     
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontSize="lg" fontWeight="bold">Beta Waves</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Text>
      In contrast to alpha and beta frequency bands, beta wave synchrony exhibited the most pronounced negative correlation with time throughout the experiment, diminishing from an initial CCorr value of 0.05 to nearly 0.00, as depicted in Figure 3. This marked reduction in synchrony among participants over time underscores a notable shift away from beta wave coherence, coinciding with enhanced frontal executive functions and a reduction in occipital activity, the latter of which is typically associated with the visual system's initial adaptation to stimuli. Notably, beta synchrony reached a peak of 0.039 in the occipital region, indicating a significantly higher level of synchrony compared to other regions of interest. This suggests that the initial phases of the experiment, which require high attentional resources and visuospatial processing, led to increased beta wave coherence, reflecting the participants' mutual engagement and cognitive alignment during the early stages of adaptation before the gradual onset of cognitive fatigue.
     </Text>
     <Text>
     Furthermore, beta oscillations have been linked to processes involving mentalization and the theory of mind, particularly in the context of evaluating partner behaviors and preferences. This connection points to a heightened state of synchrony and neural activity in the early stages of collaborative efforts, as individuals strive to align their mental states and expectations. The decline in beta synchrony over time may thus reflect a natural progression of group dynamics, where initial high levels of engagement and cognitive attunement give way to more autonomous processing patterns as individuals become accustomed to the collaborative environment. These findings illuminate the complex interplay between different neural synchrony patterns and cognitive functions during collaborative tasks, suggesting avenues for further research into how collective cognitive efforts evolve and how they can be optimized for improved performance and understanding in shared tasks.
     </Text>
 
     <Image src={beta}></Image>
     
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontSize="lg" fontWeight="bold">Gamma Waves</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Text>
      Similar to the patterns observed in beta wave behavior, gamma wave activity demonstrated considerable variability in synchrony across different regions of interest, achieving its highest recorded coherence of 0.009 CCorr within the occipital region, notably surpassing the levels found in the frontal region. This discrepancy in gamma wave synchrony, especially when contrasted with the more pronounced coherence observed in both beta and alpha waves, hints at the possibility that the specific tasks undertaken during the experiment—namely, acceleration and steering—may not inherently engage the gamma frequency band in a manner that highlights its collaborative or cognitive potential. The lack of correlation between visuospatial proficiency as measured by WAIS and gamma synchrony suggests that cognitive function related to this specific task of navigation and spatial representation are separated from the coordination of gamma frequencies within collaborative pairs.This observation opens avenues for future research to identify and deploy virtual tasks tailored to effectively harness the unique properties of gamma waves, particularly those that facilitate or require collective cognitive efforts beyond visuospatial navigation.
     </Text>
     <Text>
     Gamma waves are intricately linked with higher cognitive functions, such as mentalization and the understanding of others' mental states, or theory of mind. These aspects suggest that tasks designed to promote social interaction and require ongoing communication might prove more effective in stimulating gamma synchrony. Such tasks provide fertile ground for examining how gamma wave activity supports shared mental processes and collaborative problem-solving. Additionally, the gamma band's association with individual responses to novel stimuli and the capacity for adaptation points to its role in navigating unexpected challenges and adjusting to new information. Investigating how these dynamics play out in social settings, particularly in environments that demand rapid adaptation and coordination, could yield valuable insights into the mechanisms of collective cognition and the neurophysiological substrates that underlie successful collaboration and social interaction.
     </Text>
     <Image src={gamma}></Image>
     
    </AccordionPanel>
  </AccordionItem>


</Accordion>



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