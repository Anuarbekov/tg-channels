import mongoose from "mongoose";
export async function ConnectMongo() {
  await mongoose.connect(
    "mongodb+srv://meir:Anuarbekov2006@cluster0.afj8j1d.mongodb.net/Channels?retryWrites=true&w=majority"
  );
}
export async function DisconnectMongo() {
  await mongoose.connection.close();
}
