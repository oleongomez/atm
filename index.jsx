const ATM = ({amount, deposit, withdraw, setAmount}) => {
    const handleOnChange = (e) => {
        setAmount(e.target.value)
    }
    return(<>
    <input type="number" name="Deposit" id="deposit" value={amount} onChange={handleOnChange}/>
    <input type="button" value="Deposit" onClick={deposit}/>
    <input type="button" value="Withdraw" onClick={withdraw}/>    
    </>)
}

const App = () =>{
    const [balance, setBalance] = React.useState(0)
    const [amount, setAmount] =React.useState(0)
    const deposit = (e) => {
        console.log(balance)
        console.log(amount)
        setBalance(1000)
        setBalance(parseInt(balance)+parseInt(amount))
    }
    const withdraw = (e) =>{
        setBalance(parseInt(balance-amount))
    }

    return(<><h1>An ATM app</h1>
    <Account balance={balance}/>
    <ATM amount={amount} deposit={deposit} withdraw={withdraw} setAmount={setAmount}/>
    </>)
}

ReactDOM.render(<App className="app" />, document.getElementById("root"));