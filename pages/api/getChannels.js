import mongoose from "mongoose";
import { ConnectMongo, DisconnectMongo } from "../../utils/workMongo";
export default async function getChannels(req, res) {
  await ConnectMongo();
  const channels = mongoose.models.channels;
  try {
    const channelsInfo = await channels.find();
    await DisconnectMongo();
    await res.json(channelsInfo);
  } catch (e) {
    await DisconnectMongo();
    await res.json(e);
  }
}
