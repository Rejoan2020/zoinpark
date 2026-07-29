import React from "react";

export default function ResponseModal({ open, onClose, ticket }) {
    if (!open || !ticket) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-[#1B2222] rounded-lg w-[90%] max-w-2xl p-6 border border-zinc-800"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl text-primaryText font-semibold">
                        Ticket Response
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-secondaryText hover:text-white"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <p className="text-secondaryText">Subject</p>
                        <p className="text-primaryText">{ticket.subject}</p>
                    </div>

                    <div>
                        <p className="text-secondaryText">Category</p>
                        <p className="text-primaryText">{ticket.category}</p>
                    </div>

                    <div>
                        <p className="text-secondaryText">Your Message</p>
                        <div className="bg-[#242B2B] p-3 rounded mt-1">
                            {ticket.message}
                        </div>
                    </div>

                    <div>
                        <p className="text-secondaryText">Admin Response</p>
                        <div className="bg-[#242B2B] p-3 rounded mt-1">
                            {ticket.response || "No response yet."}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}