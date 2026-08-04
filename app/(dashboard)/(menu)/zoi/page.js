import React from 'react';
import { getAnnouncements } from '@/app/actions/announcements';
import Announcements from './components/Announcements';
import { dbconnect } from '@/lib/mongo';

export default async function page() {
    await dbconnect();

    const announcements = await getAnnouncements();

    const leanAnnouncements = announcements.map((announcement) => {
        return {
            ...announcement, _id: announcement._id.toString()
        }
    })

    return (
        <Announcements rows={leanAnnouncements} />
    )
}
