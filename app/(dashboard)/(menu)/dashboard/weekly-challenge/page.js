import React from 'react'
import WeeklyChallenge from '../components/WeeklyChallenge' 
import { getUserChallenges } from '@/app/actions/challenges';
import { dbconnect } from '@/lib/mongo';

export default async function page() {
  await dbconnect();
  const challengeArray = await getUserChallenges();
  return (
    <WeeklyChallenge challengeArray = {challengeArray}/>
  )
}
