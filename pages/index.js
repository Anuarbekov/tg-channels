import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    axios.get("api/getChannels").then((response) => {
      setChannels(response.data);
    });
  }, [channels]);
  return (
    <div>
      <Head>
        <title>Telegram Channels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {channels?.map((channel) => (
        <>
          <h3>{channel.title}</h3>
          <h4>{channel.all_users} in channel</h4>
          <h4>{channel.online_users} online</h4>
        </>
      ))}
    </div>
  );
}
