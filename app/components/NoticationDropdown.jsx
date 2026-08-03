import Link from "next/link";

export default function NotificationDropdown({ notifications }) {
    return (
        <div className="absolute right-0 top-12 w-48 lg:w-96 rounded-lg border border-zinc-800 bg-[#1B2222] shadow-xl z-50">

            <div className="p-4 border-b border-zinc-800">
                <div className="text-primaryText font-semibold">
                    Notifications
                </div>
            </div>

            <div className="max-h-96 overflow-y-auto">

                {notifications.length === 0 ? (
                    <div className="p-6 text-center text-secondaryText">
                        No notifications
                    </div>
                ) : (
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
                )}

            </div>
            <Link
                href="/notifications"
                className="flex items-center justify-center w-full p-3 hover:bg-[#242B2B] text-primaryColor border-t border-zinc-800"
            >
                View all
            </Link>


        </div>
    );
}