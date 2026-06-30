import React from 'react'
import StakingNavbar from './components/StakingNavbar'
import StakingPackage from './components/StakingPackage'
import StakingHistory from './components/StakingHistory'

export default function page() {
  return (
    <div>
        <StakingNavbar/>
        {/* <StakingPackage/> */}
        <StakingHistory/>
    </div>
  )
}
