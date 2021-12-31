import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransctionList = () => {
    const {transactions} = useContext(GlobalContext)
    console.log(transactions.filter(transaction=>transaction.amount>0))
    return (
        <>
          <h3> History</h3>
          <ul className="list">
            {transactions.map(transaction=>(
                <Transaction transaction= {transaction} key={transaction.id}/>
          ))}

              
              </ul>  
        </>
    )
}
