import { useUser } from "../contexts/UserContext";
import Paper from "@mui/material/Paper";

export default function StudentHome() {
  const user = useUser();

  if (user) {
    console.log("This is: ", user.uid);
  }
  // console.log(user.first);
  // console.log(user.last);

  // const studentName = user.first + user.last;

  return <Paper>Welcome {user.uid}!</Paper>;
}
