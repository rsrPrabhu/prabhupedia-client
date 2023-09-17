import { Box, CssBaseline, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar/index_navbar_component";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostWidget from "scenes/widgets/PostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import UserWidget from "scenes/widgets/UserWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import SidebarTemplate from "scenes/templates/dashboard/Sidebar";

const Homepage = () => {

   const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
   const { _id, picturePath } = useSelector((state) => state.user);
   const sideNavT = useSelector((state) => state.sideNav);

   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <SidebarTemplate flexBasis={isNonMobileScreens ? "26%" : undefined} />
         <Box width="100%">
            <Navbar />
            <Box width="100%" padding="2rem 6%" display={isNonMobileScreens ? "flex" : "block"}
               gap="0.5rem" justifyContent="space-between">
               <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                  <UserWidget userId={_id} picturePath={picturePath} />
               </Box>
               <Box flexBasis={isNonMobileScreens ? "42%" : undefined} mt={isNonMobileScreens ? undefined : "2rem"}>
                  <MyPostWidget picturePath={picturePath} />
                  {/* <PostsWidget userId={_id} /> */}
               </Box>
               {isNonMobileScreens && (
                  <Box flexBasis="26%">
                     <AdvertWidget />
                     <Box m="2rem 0" />
                     <FriendListWidget userId={_id} />
                  </Box>
               )}
            </Box>
         </Box>
      </Box>
   )
}

export default Homepage;

//  <Navbar />
//       <Box width="100%" padding="2rem 6%" display={isNonMobileScreens ? "flex" : "block"}
//          gap="0.5rem" justifyContent="space-between">
//           <h3>Homepage</h3> */}
//          // <SidebarTemplate flexBasis={isNonMobileScreens ? "26%" : undefined}/>
//          <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
//             <UserWidget userId={_id} picturePath={picturePath} />
//          </Box>
//          <Box flexBasis={isNonMobileScreens ? "42%" : undefined} mt={isNonMobileScreens ? undefined : "2rem"}>
//             <MyPostWidget picturePath={picturePath} />
//             <PostsWidget userId={_id}/>
//          </Box>
//          {isNonMobileScreens && (
//             <Box flexBasis="26%">
//                <AdvertWidget />
//                <Box m="2rem 0" />
//                <FriendListWidget userId={_id}/>
//             </Box>
//          )}
//       // </Box> 