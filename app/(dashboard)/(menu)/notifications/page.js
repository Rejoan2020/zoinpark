import { auth } from '@/auth'
import React from 'react'
import Notification from '@/models/Notification';
import Notifications from '@/app/components/Notifications';
import User from '@/models/User';
import { dbconnect } from '@/lib/mongo';

export default async function page() {
    await dbconnect();
    const session = await auth();
    const user = await User.findOne({ email: session?.user?.email }).lean();
    const notifications = await Notification.find({ user: user._id }).lean();
    const leanNotifications = notifications.map(notification => {
        return {
            ...notification, _id: notification._id.toString(), user: notification.user.toString(),
            createdAt: notification.createdAt.toString(), updatedAt: notification.updatedAt.toString()
        }
    })
    return (
        <Notifications notifications={leanNotifications} />
    )
}
