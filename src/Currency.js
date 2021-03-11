import React from 'react'
import {findDOMNode} from 'react-dom';

export default function Currency(props){
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,

        amount

         
    } = props

    return(

        <div>
        <input type="number" className="input" value={amount} onChange={onChangeAmount} />
        <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option =>(
            <option key={option} value={option}>{option}</option>
            ))}
        </select>

        </div>
    )
}  