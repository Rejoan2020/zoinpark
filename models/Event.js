import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    eventDate: {
      type: Date,
      required: true,
    },

    registrationLink: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["upcoming", "ongoing", "completed", "cancelled"],
      default: "upcoming",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Event ||
  mongoose.model("Event", eventSchema);