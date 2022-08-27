import mongoose from "mongoose";
import { ConnectMongo, DisconnectMongo } from "../../../utils/workMongo";
export default async function getChannelInfo(req, res) {
  const { _id } = req.query;
  await ConnectMongo();
  const channels = mongoose.models.channels;
  try {
    const channelInfo = await channels.findById(_id);
    await DisconnectMongo();
    await res.json(channelInfo);
  } catch (e) {
    await DisconnectMongo();
    await res.json(e);
  }
}
