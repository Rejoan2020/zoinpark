import React from 'react'
import WeeklyChallenge from '../components/WeeklyChallenge' 
import { getUserChallenges } from '@/app/actions/challenges';

export default async function page() {
  await dbconnect();
  const challengeArray = await getUserChallenges();
  return (
    <WeeklyChallenge challengeArray = {challengeArray}/>
  )
}
