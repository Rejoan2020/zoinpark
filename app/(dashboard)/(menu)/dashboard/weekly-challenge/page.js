import React from 'react'
import WeeklyChallenge from '../components/WeeklyChallenge'
import userWeeklyChallenge from '@/models/userWeeklyChallenge';

export default async function page() {
  const challengeArray = await userWeeklyChallenge.find();
  console.log(challengeArray);
  return (
    <WeeklyChallenge challengeArray = {challengeArray}/>
  )
}
