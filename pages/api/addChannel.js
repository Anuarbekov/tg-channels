import mongoose from "mongoose";
const { Schema } = mongoose;
export default async function addChannel(req, res) {
  const { title, all_users, online_users, total_messages } = req.body;
  await mongoose.connect(
    "mongodb+srv://meir:Anuarbekov2006@cluster0.afj8j1d.mongodb.net/Channels?retryWrites=true&w=majority"
  );
  const channelSchema = new Schema({
    title: String,
    all_users: Number,
    online_users: Number,
    total_messages: Number,
  });
  const channels =
    mongoose.models.channels || mongoose.model("channels", channelSchema);
  const channel = new channels({
    title: title,
    all_users: all_users,
    online_users: online_users,
    total_messages: total_messages,
  });
  channel.save().then(() => {
    res.status(200).send("Added!");
  });
}
