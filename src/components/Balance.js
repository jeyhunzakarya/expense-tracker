import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
export const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction=> transaction.amount)
        return (
        <div>
            <h4>your balance</h4>
           <h4 id='balance'>
           <p>${amounts.reduce((a,b)=>a+b,0) }</p>     
           </h4> 
        </div>
    )
}
