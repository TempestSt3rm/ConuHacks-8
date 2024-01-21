import Navbar from "./Navbar"


function Dashboard() {

    let totalRevenue = 1124350;
    let totalRevenueTurnedAway = 1730650;
    let percentageProfit = (totalRevenue / (totalRevenue + totalRevenueTurnedAway)) * 100; 
    let roundedpercentageProfit = percentageProfit.toFixed(2);
    return (
        <>
        <Navbar></Navbar>
        <h1 className="dataSummary">Data Summary</h1>
        <ul>
        <li>Total Revenue $1124350</li>
        <li>Total Revenue Turned Away $1730650</li>
        <li>Total Customers Served 4791</li>
        <li>Percentage Profit {roundedpercentageProfit}%</li>
        </ul>
        </>
    )
}

export default Dashboard