import mongoose from "mongoose";
export default async function getChannelInfo(req, res) {
  const { _id } = req.query;
  await mongoose.connect(
    "mongodb+srv://meir:Anuarbekov2006@cluster0.afj8j1d.mongodb.net/Channels?retryWrites=true&w=majority"
  );
  const channels = mongoose.models.channels;
  try {
    const channelInfo = await channels.findById(_id);
    await res.json(channelInfo);
  } catch (e) {
    await res.json(e);
  }
}
