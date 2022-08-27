import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function CardInfo({
  _id,
  title,
  all_users,
  online_users,
  total_messages,
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 400,
        marginTop: 4,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 20 }}>{title}</Typography>
        <br />
        <Typography>{all_users} users in channel</Typography>
        <Typography>{online_users} online</Typography>
        <br />
        <Typography>{total_messages} total messages</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() =>
            window.open(`http://localhost:3000/channel/${_id}`, "_blank")
          }
        >
          Learn More Channel
        </Button>
      </CardActions>
    </Card>
  );
}
