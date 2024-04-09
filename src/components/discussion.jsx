import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, Text, Button, UnorderedList, ListItem, Flex, Tooltip, Highlight } from '@chakra-ui/react'
import { Image, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { Page } from './export'
import { figure3 } from '../images/export'
import { alpha, beta, gamma, communication } from '../images/export'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Discussion = ({curr}) => {

  const [page, setPage] = useState(0);
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


        <Heading as='h2' size='lg' textAlign='center' marginTop='30px' marginBottom= '40px'>Discussion</Heading>
 
    

        <Accordion>
        <AccordionItem>
  <h2>
    <AccordionButton>
      <Box as="span" flex="1" textAlign="left">
        <Text fontSize="lg" fontWeight="bold">Overall Findings</Text>
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
    <Flex direction={["column", "row"]} alignItems="center" justifyContent="space-between">
      <Text flex="1" marginRight="20px">
        The study shows that <Highlight query="virtual collaboration leads to synchrony among participants" styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.100' }}>virtual collaboration leads to synchrony among participants</Highlight> across key brain regions and wave bands, even without physical interaction. Significant differences in synchrony levels indicate effective task coordination within virtual environments. Task performance, especially within the alpha wave band, <Highlight query="correlates with the success of collaboration" styles={{ px: '2', py: '1', rounded: 'full', bg: 'green.100' }}>correlates with the success of collaboration</Highlight>, highlighting the importance of attention and relaxation states in aligning brain activity. Time and visuospatial skills play roles in influencing <Tooltip label="Cognitive resource distribution refers to how mental processing capacity is allocated across different tasks and cognitive demands." aria-label="Tooltip for Cognitive Resource Distribution">
          <span style={{ textDecoration: "underline" }}>cognitive resource distribution</span>
        </Tooltip> and attention spans during collaborative tasks. This study opens avenues for further research into virtual tasks with lower cognitive demands, examining <Tooltip label="Mentalization is the ability to understand the mental state, of oneself or others, that underlies overt behavior." aria-label="Tooltip for Mentalization">
          <span style={{ textDecoration: "underline" }}>mentalization</span>
        </Tooltip> and theory of mind in networked environments.
      </Text>
      <Tooltip label="Visual representation of communication findings" aria-label="Tooltip">
        <Image alignSelf="center" blockSize="200px" src={communication} alt="Communication Findings"/>
      </Tooltip>
    </Flex>
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
      The alpha wave inter-synchrony showed significant consistency and statistical relevance across different <Tooltip label="Region of Interest" aria-label="ROI Definition"><span style={{ textDecoration: "underline" }}>ROIs</span></Tooltip> (Regions of Interest) during the experiment. The t-test indicated a strong correlation between alpha waves and cognitive performance enhancements, with CCorr values and mean p-values notably below 0.005. The synchrony in the frontal, central, and occipital lobes <Highlight query="suggests a direct link to improved attention and visual perception capabilities" styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.100' }}>suggests a direct link to improved attention and visual perception capabilities</Highlight>, without significant variance between ROIs, highlighting a stable alpha synchrony throughout the brain.
    </Text>
    <Text>
      Dyad scores from the <Tooltip label="Wechsler Adult Intelligence Scale" aria-label="WAIS Definition"><span style={{ textDecoration: "underline" }}>WAIS</span></Tooltip> <Highlight query="indicated an inverse relationship with alpha wave synchrony" styles={{ px: '2', py: '1', rounded: 'full', bg: 'green.100' }}>indicated an inverse relationship with alpha wave synchrony</Highlight>, suggesting that higher cognitive focus might be achieved independently of alpha frequency coordination. This points to a complex relationship between alpha wave synchrony and cognitive performance, particularly in attentional and sensory integration tasks. The findings suggest that while shared attention states, facilitated by alpha synchrony, can enhance cognitive functions for complex tasks, individual cognitive performance might balance differently within group dynamics.
    </Text>
    <Text>
      These insights open avenues for future research into how interpersonal neural synchronization affects cognitive mechanisms, <Highlight query="potentially offering new strategies for cognitive enhancement through neural synchrony" styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange.100' }}>potentially offering new strategies for cognitive enhancement through neural synchrony</Highlight>.
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
      Beta wave synchrony, initially high, indicating focused engagement and visuospatial processing, showed a pronounced decrease over time, from a CCorr value of 0.05 to nearly 0.00, as illustrated in <Button onClick={onOpen} variant="link" colorScheme="blue" textDecoration="underline">Figure 3</Button>. This trend suggests a shift from <Highlight query="heightened collective cognitive alignment towards reduced coherence" styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.100' }}>heightened collective cognitive alignment towards reduced coherence</Highlight>, with notable beta synchrony peaking at 0.039 in the occipital region, signifying early stages of high attentional resource utilization and adaptation.
    </Text>
    <Text>
      Furthermore, beta synchrony's initial increase reflects processes of mentalization and theory of mind, essential for evaluating partner behaviors during early collaborative efforts. The decline over time hints at a natural progression from intense engagement to more individualized processing as participants acclimate to the collaborative task, emphasizing the dynamic interplay of neural synchrony with cognitive function and group dynamics.
    </Text>
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Figure 3: Synchrony Levels in Different ROIs (CCorr vs. Hz)</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={figure3} alt="Beta Wave Synchrony" />
        </ModalBody>
      </ModalContent>
    </Modal>
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
      Gamma wave activity, like beta waves, showed variable synchrony across regions, peaking at 0.009 CCorr in the occipital region, which is higher than in the frontal area. This variation suggests that tasks like acceleration and steering may not engage gamma waves in a way that demonstrates their collaborative or cognitive capacities. The absence of a link between WAIS-measured visuospatial skills and gamma synchrony <Highlight query="indicates a separation of these cognitive functions from gamma wave coordination" styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.100' }}>indicates a separation of these cognitive functions from gamma wave coordination</Highlight> in tasks requiring navigation and spatial awareness. This finding prompts further research into virtual tasks that can better utilize gamma waves for collective cognitive tasks beyond visuospatial challenges.
    </Text>
    <Text>
      Given gamma waves' connection to higher cognitive functions, including understanding others' mental states, <Highlight query="tasks encouraging social interaction and communication might better stimulate gamma synchrony" styles={{ px: '2', py: '1', rounded: 'full', bg: 'green.100' }}>tasks encouraging social interaction and communication might better stimulate gamma synchrony</Highlight>. Exploring how gamma activity supports joint mental processes and problem-solving, and its role in adapting to new stimuli and challenges in social contexts, could offer insights into collective cognition's neurophysiological foundations and the keys to successful collaboration.
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