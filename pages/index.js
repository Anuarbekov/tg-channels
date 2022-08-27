import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import ErrorCard from "../components/ErrorCard";
export default function Home() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    axios.get("api/getChannels").then((response) => {
      setChannels(response.data);
    });
  }, [channels]);
  return (
    <div className="main">
      <Head>
        <title>Telegram Channels</title>
      </Head>
      {channels != [{}] ? (
        channels.map((channel) => (
          <Card
            _id={channel._id}
            title={channel.title}
            all_users={channel.all_users}
            online_users={channel.online_users}
            total_messages={channel.total_messages}
          />
        ))
      ) : (
        <ErrorCard />
      )}
    </div>
  );
}
