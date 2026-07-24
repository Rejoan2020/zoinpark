import React from 'react' 
import StakingPageClient from './components/StakingPageClient'
import { getPackages } from '@/app/actions/staking';

export default async function page() {
  const packages = await getPackages(); 
  return(
    <StakingPageClient packages = {packages}/>
  )
}
