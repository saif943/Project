const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  marketDataTotalVolumeUsd: {
    type: Number,
    required: true,
  },
  marketDataCurrentPriceUsd: { type: Number, required: true },
  marketDataAthChangePercentage_usd: { type: Number, required: true },
  image: { type: String, required: true },
  cardID: { type: Schema.Types.ObjectId, ref: "user" },
});

module.exports = Profil = model("profil", UserSchema);
