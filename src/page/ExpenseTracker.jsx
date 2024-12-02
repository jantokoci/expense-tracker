import { useState } from "react"
import { FormGroup, FormLabel, ModalBody } from "react-bootstrap";



function ExpenseTracker() {
    
    //handling the base money that u add in the start, and add to do transaction list (negativ values not work)
    const [addListItems, setAddListItems] = useState([])
    const [money, setMoney] = useState(0)
    let plusMoney = 0
    let baseMoney = 0
    function handlePlusMoney(event){
        plusMoney = (event.target.valueAsNumber)
        }
    function addMoney() {
        if(plusMoney > 0){
        setMoney(baseMoney => money + plusMoney)
        document.getElementById("baseMoney").value = ""
    }
        else document.getElementById("baseMoney").value = ""

        const newAddListItems = plusMoney
        setAddListItems(l => [...l, newAddListItems])
        setTrans(true)
    }

    //handling the pay that u text in for the categories (negativ values not work)
    let payMoney = 0
    function handlePayThing(event) {
        payMoney = (event.target.valueAsNumber)
    }

    //handling the list generating from expenses
    const [listItems, setListItems] = useState([])
    function payThing(event) {
        if(payMoney < money){
            if(payMoney > 0){
                setMoney(baseMoney => baseMoney - payMoney)
                document.getElementById("payMoney").value = ""
            }
            else {
                document.getElementById("payMoney").value = ""
            }

            const newListItems = payMoney
            setListItems(l => [...l, newListItems])
        }
        else {
            alert('You cant have a negative balance')
            document.getElementById("payMoney").value = ""
        }
        setTrans(true)
    }


    //currency changer function
    const [currency, setCurrency] = useState('HUF')
    function handleCurrencyChange(event){
        setCurrency(event.target.value)

        if (event.target.value === 'EUR'){
            setMoney(baseMoney => money / 415)
        }
        if (event.target.value === 'HUF'){
            setMoney(baseMoney => money * 415)
        }
    }

    //transaction remover
    function removeActionPay(index) {
        const updatedAction = listItems.filter((_, i) => i !== index)
        setListItems(updatedAction)
    }

    function removeActionBalance(index) {
        const updatedBalanceLi = addListItems.filter((_, i) => i !== index)
        setAddListItems(updatedBalanceLi)
    }


    //transaction handler
    const [trans, setTrans] = useState(false)

    //website
    return (
            <>
            <div className="second-body">
            <div className="head"> 
                <p className="text">Balance </p><p className="balance">{Math.round(money * 100) / 100}  {currency}</p>
                    <select className="customsel" value={currency} onChange={handleCurrencyChange}>
                            <option className="option" value="HUF">Forint</option>
                            <option className="option" value="EUR">Euro</option>
                    </select>
            </div>
            <div>
                    <input className="moneyinput"type="number" onChange={handlePlusMoney} id="baseMoney" placeholder="Add to Balance"/>
                    <button className="btn"onClick={addMoney}>Add</button>
            </div>

            <div>
                <p className="text">Transactions</p>
                {trans ? <ul>
                    {listItems.map((listItem, index) => <li className="minusli" key={index}>-{Math.round(listItem * 100) /100}HUF<button className="btn2" onClick={() => removeActionPay(index)}>Remove</button></li>)}
                    {addListItems.map((addListItem, index) => <li  className="addli" key={index}>+{Math.round(addListItem * 100) / 100}HUF<button className="btn2" onClick={() => removeActionBalance(index)}>Remove</button></li>)}
                </ul> : <p className="error-funct">You dont have any transaction</p>}
            </div>


            <div>
                <p className="text">Expenses</p>
                        <input className="moneyinput2" type="number" onChange={handlePayThing} id="payMoney" placeholder="Add a payment"/>
                        <button className="btn2" onClick={payThing}>Pay</button>
            </div>
            </div>
            </>
    )
}

export default ExpenseTracker