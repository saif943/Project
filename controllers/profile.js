const Profil = require("../models/Profil");
const User = require("../models/User");
exports.Profil = async (req, res) => {
  try {
    const {
      name,
      marketDataTotalVolumeUsd,
      marketDataCurrentPriceUsd,
      marketDataAthChangePercentage_usd,
      image,
      cardID,
    } = req.body;
    const newCoin = new Profil({ ...req.body, cardID: req.user._id });
    await User.updateOne(
      { _id: req.user._id },
      { $push: { id_profile: newCoin._id } }
    );

    await newCoin.save();
    res.status(200).send({ msg: "coin saved succ", coin: newCoin });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not save the coin" }] });
  }
};
exports.deleteProfil = async (req, res) => {
  try {
    const {
      name,
      marketDataTotalVolumeUsd,
      marketDataCurrentPriceUsd,
      marketDataAthChangePercentage_usd,
      image,
      cardID,
    } = req.body;

    const DeleteCoin = await Profil.findOneAndDelete({
      _id: req.params.id,
    }).populate("cardID");

    res.send({ response: DeleteCoin, message: "deleted" });
    DeleteCoin
      ? res.send({ response: "coin deleted" })
      : res.send("there is no coin with this id ");
  } catch (error) {
    res.status(400).send({ message: " there is no id " });
  }
};
exports.GetProfil = async (req, res) => {
  try {
    const {
      name,
      marketDataTotalVolumeUsd,
      marketDataCurrentPriceUsd,
      marketDataAthChangePercentage_usd,
      image,
      cardID,
    } = req.body;
    const getCoinId = await Profil.findOne({ _id: req.params.id }).populate(
      "cardID"
    );

    res.send({ response: getCoinId, message: "get coin" });
  } catch (error) {
    res.status(400).send({ message: " there is no id " });
  }
};
exports.GetAll = async (req, res) => {
  try {
    const {
      name,
      market_data_total_volume_usd,
      market_data_current_price_usd,
      market_data_ath_change_percentage_usd,
    } = req.body;
    const getAllCoin = await Profil.find();
    console.log(getAllCoin);
    res.send({ response: getAllCoin, message: "get All" });
  } catch (error) {
    res.status(400).send({ message: " there is no coins " });
  }
};
