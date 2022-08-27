import mongoose from "mongoose";
const { Schema } = mongoose;
import { ConnectMongo, DisconnectMongo } from "../../utils/workMongo";
export default async function addChannel(req, res) {
  const { title, all_users, online_users, total_messages } = req.body;
  await ConnectMongo();
  const channelSchema = new Schema({
    title: { type: String, required: true },
    all_users: { type: Number, required: true },
    online_users: { type: Number, required: true },
    total_messages: { type: Number, required: true },
  });
  const channels =
    mongoose.models.channels || mongoose.model("channels", channelSchema);
  const channel = new channels({
    title: title,
    all_users: all_users,
    online_users: online_users,
    total_messages: total_messages,
  });
  channel.save().then(async () => {
    await DisconnectMongo();
    res.status(200).send("Added!");
  });
}
