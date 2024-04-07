import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, Text, Button } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Page } from './export'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Results = ({curr}) => {

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
        <Heading title="Results and Discussion" center={true} className='head'/>
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