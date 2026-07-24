'use client'
import React from 'react'
import StakingPackage from './StakingPackage';
import StakingHistory from './StakingHistory';
import StakingNavbar from './StakingNavbar';
import { useState } from 'react';

export default function StakingPageClient({packages}) {
    const [stakingPackage, setStakingPackage] = useState(true);
    const handleClick = (tab) => {
        if (tab == 'staking') setStakingPackage(true);
        else setStakingPackage(false);
    }


    return (
        <div>
            <StakingNavbar handleClick={handleClick} staking={stakingPackage} />
            {stakingPackage ? <StakingPackage packages = {packages}/> : <StakingHistory />}
        </div>
    )
}
