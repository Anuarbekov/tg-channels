import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function ErrorCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 400,
        marginTop: 4,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 20 }}>No Telegram Channels</Typography>
        <br />
        <Typography></Typography>
        <br />
        <Typography></Typography>
      </CardContent>
    </Card>
  );
}
