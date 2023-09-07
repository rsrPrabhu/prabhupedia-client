import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state/index_state";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";
import { useNavigate } from "react-router-dom";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.friends);

    const { palette } = useTheme();
    const primaryLight = palette.neutral.light;
    const primaryDark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    const isFriend = friends ? friends.find((friend) => friend._id === friendId) : false;

    const patchFriend = async () => {
        const response = await fetch(
            `http://localhost:3001/users/${_id}/${friendId}`,
            {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "Application/json"
                }
            });
            console.log(friends, 'friendsfriendsfriends');
        const data = await response.json();
        dispatch(setFriends({ friends: data }));
    }

    return (
        <FlexBetween>
            <FlexBetween gap="1rem">
                <UserImage image={userPicturePath} size="55px" />
                <Box onClick={() => {
                    navigate(`/profile/${friendId}`);
                    navigate(0);
                }}>
                    <Typography
                        color={main}
                        variant="h5"
                        fontWeight="500"
                        sx={{
                            "&:hover": {
                                color: palette.primary.light,
                                cursor: "pointer"
                            }
                        }}>
                        {name}
                    </Typography>
                    <Typography color={medium} fontSize="0.75rem">
                        {subtitle}
                    </Typography>
                </Box>
            </FlexBetween>
            <IconButton onClick={() => patchFriend()}
                sx={{ backgroundColor: primaryLight, p: "0.65rem" }}>
                {isFriend ? (
                    <PersonRemoveOutlined sx={{ color: primaryDark }} />
                ) : <PersonAddOutlined sx={{ color: primaryDark }} />}
            </IconButton>
        </FlexBetween>
    )
}


export default Friend;
