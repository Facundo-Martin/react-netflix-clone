import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const useUser = () => {
  const user = useSelector(selectUser);
  return user;
};

export default useUser;
