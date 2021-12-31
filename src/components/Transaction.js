import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
export const Transaction = ({transaction}) => {
    const sign = transaction.amount>0? "+":"-"
    const {deleteTransaction}= useContext(GlobalContext)
    return (
            <li className={transaction.amount>0? "plus" : "minus"}>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span> <button className= "delete-btn" onClick={()=>{deleteTransaction(transaction.id)}}>x</button>
            </li>
    )
}
