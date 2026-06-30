'use client'
import React, { useState } from 'react'
import StakingNavbar from './components/StakingNavbar'
import StakingPackage from './components/StakingPackage'
import StakingHistory from './components/StakingHistory'

export default function page() {
  const [stakingPackage, setStakingPackage] = useState(true);
  const handleClick = (tab)=>{
    if(tab=='staking')setStakingPackage(true);
    else setStakingPackage(false);
  }
  return (
    <div>
        <StakingNavbar handleClick = {handleClick} staking={stakingPackage}/>
        {stakingPackage ?<StakingPackage/>: <StakingHistory/>}
    </div>
  )
}
