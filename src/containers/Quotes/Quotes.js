import React, {useState, useEffect} from 'react'
import { QuotesList } from '../../components/Quotes/QuotesList/QuotesList'
import axios from 'axios'
import {Title} from '../../components/Title/Title'
import {Spinner} from '../../components/UI/Spinner/Spinner'
import {SearchQuote} from './Search/SearchQuote'

const Quotes = () => {
    const [quotes, setQuotes] = useState([])
    const [loaded, setLoading] = useState(true)
    const [quoteInput, getQuoteInputs] = useState([])
    useEffect(() => {
       axios.get('https://programming-quotes-api.herokuapp.com/quotes')
            .then(response => {
                setQuotes([...response.data])
            })

            return () => {
                setLoading(false)
            }
    }, [quotes])

    const loadingData = (
        <Spinner />
    )

    const handleQuoteInput = (quote) => {
        getQuoteInputs()
        getQuoteInputs(prevState => {
            return ([...prevState, quote])
        })
    }

  return (
    <>
    <Title>Programming Quotes API</Title>
    <SearchQuote handleQuoteInput={handleQuoteInput}/>
    {loaded ? loadingData : <QuotesList quotes={quotes}/>}
    </>
  ); 
}

export default Quotes;