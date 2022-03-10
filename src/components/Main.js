import React, { Component } from 'react'
import dai from '../dai.png'
import Grid from '@material-ui/core/Grid';

class Main extends Component {

  render() {
    return (
      <div className="flex ">
      {/* <div className="px-4" style={{ maxWidth: '1600px' }}> */}

        <table className="table table-borderless text-muted text-center">
        <thead>
            <tr>
            <label className="float-center"><h2>vCOP Staking Tablero</h2></label>
              
            </tr>
          </thead>
         
        </table>
        <Grid container spacing={3}>
        <Grid item xs={4}>
        <div className="card mb-4" >

          <div className="card-body">

            <form className="flex" onSubmit={(event) => {
                event.preventDefault()
                let amount
                amount = this.input.value.toString()
                amount = window.web3.utils.toWei(amount, 'Ether')
                this.props.stakeTokens(amount)
              }}>
            
                <label className="flex"><b>vCop Staking</b></label>
            
            
            <div className="flex ">
                <small className="text-primary">
                  <small id="account">MATIC:...9f1357a40</small>
                </small>
              </div>
              <div>
              </div>
              <table className="table table-borderless text-muted">
          <thead>
            <tr>
              <th scope="col">TOTAL STAKED</th>
              <th scope="col">AVAILABLE IN WALLET</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} vCOP</td>
              <td>{window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')} vCOP</td>
            </tr>
          </tbody>
        </table>
        
        <div className="border shadow rounded-xl overflow-hidden">
        <table className="table table-borderless text-muted">
          <thead>
            <tr>
              <th scope="col">CLAIMABLE REWARDS</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} vCOP</td>
              <td>Restake</td>
              <td><button type="submit" className="btn btn-primary btn-block">Claim</button></td>
            </tr>
            
          </tbody>
        </table>


        
        </div>
        

             
              
              
              <br></br>
              <button type="submit" className="btn btn-primary btn-block btn-lg">STAKE!</button>
            </form>
            <button
              type="submit"
              className="btn btn-link btn-block btn-sm"
              onClick={(event) => {
                event.preventDefault()
                this.props.unstakeTokens()
              }}>
                UN-STAKE...
              </button>
          </div>
            
          
        </div>
        </Grid>
        <Grid item xs={4}>
        <div className="card mb-4" >

<div class = "card-body" >
 

 
 <h4 class = "card-subtitle mb-2 text-muted text-left" > Total Staked </h4>
 <h3 class="card-text text-left">23.681.373 vCOP</h3>
 <p>6230 $</p>

 </div> 
 </div>  
 </Grid>
 <Grid item xs={4}>
 <div className="card mb-4" >

<div class = "card-body text-white bg-primary">
 

 
 <h4 class = "card-subtitle mb-2 text-left" > Estimated Reward </h4>
 <h1 class="card-text text-left">24 %</h1>
 <p>APR</p>

 </div> 
 </div>  
 </Grid>

        </Grid>
      </div>
      
    );
  }
}
export default Main;
