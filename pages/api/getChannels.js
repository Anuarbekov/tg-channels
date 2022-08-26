import mongoose from "mongoose";
export default async function getChannels(req, res) {
  await mongoose.connect(
    "mongodb+srv://meir:Anuarbekov2006@cluster0.afj8j1d.mongodb.net/Channels?retryWrites=true&w=majority"
  );
  const channels = mongoose.models.channels;
  try {
    const channelsInfo = await channels.find();
    await res.json(channelsInfo);
  } catch (e) {
    await res.json(e);
  }
}
