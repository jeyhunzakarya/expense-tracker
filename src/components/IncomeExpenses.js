import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    const posit = transactions.filter(transaction=>transaction.amount>0).map(transaction=>transaction.amount).reduce((a,b)=>a+b,0)
    const negat = transactions.filter(transaction=>transaction.amount<0).map(transaction=>transaction.amount).reduce((a,b)=>a+b,0)    
    return (
        <div className='inc-exp-container'>
            <div>
                <h3>Income</h3>
                    <p id = "money-plus" className= "money plus"> +${posit} </p>
            </div>
            <div>
               <h3>expense</h3> 
               <p id = "money-plus" className= "money minus"> -${negat} </p>
            </div>
            
        </div>
    )
}
