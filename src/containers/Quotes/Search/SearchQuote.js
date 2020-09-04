import React, {useState} from 'react'

export const SearchQuote = ({handleQuoteInput}) => {
    const [quoteInput, getQuote] = useState("")
    
    return (
        <>
            <input onChange={(e) => getQuote(e.target.value)}></input>
            <input type="submit" onClick={() => handleQuoteInput(quoteInput)}></input>
        </>
    )
}