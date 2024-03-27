import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react' 
import '../styles/Manual.css'
import { Intro } from './export'
const Home = () => {
  const [curr, setCurr] = useState(-1)

  const onPageChange = (val) => {
    setCurr(val);
  }
    return (
      <>
      <Tabs size='md' variant='enclosed' className='tabs'>
      <TabList className='headers'>
        <Tab onClick={() => onPageChange(0)}>Introduction</Tab>
      </TabList>
      <TabPanels className="content">
        {/*Each TabPanel contains a component which has manual content */}
        <TabPanel>
          <Intro curr={curr}></Intro>
        </TabPanel>
      </TabPanels>
    </Tabs>
    </>
    )
  }
  
  export default Home