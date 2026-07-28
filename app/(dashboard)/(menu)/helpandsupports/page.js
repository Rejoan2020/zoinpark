import React from 'react' 
import { redirect } from 'next/navigation';

export default async function page() {
  redirect('/helpandsupports/tickets')
}
