import axios from "axios";
export default function Channel({ channel }) {
  return (
    <div>
      {channel.title}
      {channel.all_users}
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
