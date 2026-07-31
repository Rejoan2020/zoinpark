import React from 'react'

export default function Notifications({ notifications }) {
    return (
        <div> 
            {
                notifications.map((notification) => (
                    <button
                        key={notification._id}
                        className="w-full text-left p-4 hover:bg-[#242B2B] border-b border-zinc-800"
                    >
                        <div className="flex gap-3">

                            {!notification.read && (
                                <div className="mt-2 h-2 w-2 rounded-full bg-primaryColor" />
                            )}

                            <div>

                                <div className="text-primaryText">
                                    {notification.title}
                                </div>

                                <div className="text-secondaryText text-sm mt-1">
                                    {notification.message}
                                </div>

                                <div className="text-xs text-zinc-500 mt-2">
                                    {notification.createdAt}
                                </div>

                            </div>

                        </div>
                    </button>
                ))
            }
        </div>
    )
}
