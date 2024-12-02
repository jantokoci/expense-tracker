import { useNavigate } from "react-router"


function Welcome() {

    const navigate = useNavigate()

    return(
        <div className="first-body">
            <div>
                <h1 className="welcome-label">Welcome in my Expense Tracker App!</h1>
                <div className="button-container">
                    <button className="welcome-button" onClick={() => navigate('app')}>Lets get Started!</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome