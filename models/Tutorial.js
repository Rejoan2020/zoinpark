import mongoose from "mongoose";

const tutorialSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    youtubeUrl: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "General",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Tutorial ||
  mongoose.model("Tutorial", tutorialSchema);