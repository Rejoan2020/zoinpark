import React from 'react'
import ZoinHeader from './components/ZoinHeader'
import { getTotalStakes } from '@/app/actions/staking';
import { getTotalDebitCredits } from '@/app/actions/staking';
import { getWalletHistory } from '@/app/actions';

export default async function page() {

  const totalStaking = await getTotalStakes();
  const totalDebitCredits = await getTotalDebitCredits();
  const walletHistory = await getWalletHistory();
  const leanTransactions = walletHistory.map((t) => ({
    ...t,
    _id: t._id.toString(),
    wallet: t.wallet.toString(),
    referenceId: t.referenceId?.toString() ?? null,
    createdAt: t.createdAt.toISOString(),
    updatedAt: t.updatedAt.toISOString(),
  }));
  console.log(leanTransactions);

  return (
    <ZoinHeader
      totalStaking={totalStaking}
      totalDebits={totalDebitCredits[0]}
      totalCredits={totalDebitCredits[1]}
      transactions = {leanTransactions}
    />
  )
}
