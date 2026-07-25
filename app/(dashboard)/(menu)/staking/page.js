import React from 'react'
import StakingPageClient from './components/StakingPageClient'
import { getPackages, getUserStakes } from '@/app/actions/staking';

export default async function page() {
  const packages = await getPackages();
  const history = await getUserStakes();
  const totalStaking = history.map((pkg) => pkg.amount);
  console.log(totalStaking);
  let sum = 0;
  for(let i=0;i<totalStaking.length;i++)sum+=totalStaking[i];

  const packageMap = new Map(
    packages.map(pkg => [pkg._id.toString(), pkg])
  );

  const leanHistory = history.map(item => {
    const pkg = packageMap.get(item.package.toString());

    return {
      ...item,
      _id: item._id.toString(),
      user: item.user.toString(),
      package: item.package.toString(),

      // Package info
      packageName: pkg?.name, 

      createdAt: item.createdAt.toString(),
      updatedAt: item.updatedAt.toString(),
      startDate: item.startDate.toString(),
      endDate: item.endDate.toString(),
    };
  });

  return (
    <StakingPageClient packages={packages} history={leanHistory} totalStaking = {sum} />
  )
}
