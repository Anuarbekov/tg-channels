import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Head from "next/head";
export default function Channel({ channel }) {
  return (
    <div className="main">
      <Head>
        <title>Channel</title>
      </Head>
      
      <Card
        variant="outlined"
        sx={{
          width: 400,
          marginTop: 4,
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 20 }}>{channel.title}</Typography>
          <br />
          <Typography>{channel.all_users} users in channel</Typography>
          <Typography>{channel.online_users} online</Typography>
          <br />
          <Typography>{channel.total_messages} total messages</Typography>
        </CardContent>
        
      </Card>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { _id } = context.query;
  const response = await axios.get(
    `http://localhost:3000/api/getChannelInfo/${_id}`
  );
  const channel = response.data;
  return {
    props: { channel },
  };
}
