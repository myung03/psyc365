import React, { useState } from 'react'
import { Heading, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react' 
import '../styles/Manual.css'
import { Intro, Methods, Results, Conclusion, Hypotheses } from './export'
import brain from '../images/brain.png'

const Home = () => {
  const [curr, setCurr] = useState(-1)

  const onPageChange = (val) => {
    setCurr(val);
  }
    return (
      <>
      <img src={brain} className="center" />
      <Tabs size='md' variant='enclosed' className='tabs'>
      <TabList className='headers'>
        <Tab onClick={() => onPageChange(0)}>Introduction</Tab>
        <Tab onClick={() => onPageChange(1)}>Question and Hypotheses</Tab>
        <Tab onClick={() => onPageChange(2)}>Research Design</Tab>
        <Tab onClick={() => onPageChange(3)}>Results and Discussion</Tab>
        <Tab onClick={() => onPageChange(4)}>Conclusion</Tab>
      </TabList>
      <TabPanels className="content">
        {/*Each TabPanel contains a component which has manual content */}
        <TabPanel>
          <Intro curr={curr}></Intro>
        </TabPanel>
        <TabPanel>
          <Hypotheses curr={curr}></Hypotheses>
        </TabPanel>
        <TabPanel>
        <Methods curr={curr}></Methods>
        </TabPanel>
        <TabPanel>
        <Results curr={curr}></Results>
        </TabPanel>
        <TabPanel>
          <Conclusion curr={curr}></Conclusion>
        </TabPanel>
      </TabPanels>
    </Tabs>
    </>
    )
  }
  
  export default Home