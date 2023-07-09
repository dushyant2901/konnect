import React, { useEffect, useId, useState } from "react";

import { useParams } from "react-router";
import { getUserByUsernameService } from "../../services/appServices/usersService";
import { Following, Posts, ProfileCard, Tabs } from "../../components";
import { usePost, useUser } from "../../context";

const Profile = () => {
  // const [userProfile, setUserProfile] = useState(null);
  // const [userPosts, setUserPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const { userId } = useParams();
  const { user, getUserByUserId, isLoading } = useUser();
  const { posts } = usePost();
  useEffect(() => {
    getUserByUserId(userId);
    // const getUserPostHandler = async (userId) => {
    //   try {
    //     setLoading(true);
    //     setError(null);
    //     const res = await getUserPostsService(userId);
    //     if (res.status === 200) {
    //       console.log(res.data.posts);
    //       setUserPosts(() => res.data.posts);
    //       dataDispatch({ type: "SET_POSTS", payload: res.data.posts });
    //       setLoading(false);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     setError(error);
    //   }
    // };
    // getUserPostHandler(userId);
  }, [userId]);
  // add loading
  // useEffect(() => {
  //   setUserPosts(posts.filter(({ userId: id }) => userId === id));
  // }, [posts]);
  const userPosts = posts.filter(({ userId: id }) => id === userId);

  if (isLoading) {
    return <h4>loading......</h4>;
  }
  const { following, followers } = user ?? {};
  console.log({ followers, following });
  return (
    <div>
      <ProfileCard user={user} />
      <Tabs
        posts={<Posts posts={userPosts} />}
        followers={<Following users={followers} />}
        following={<Following isTypeFollowing users={following} />}
      />
    </div>
  );
};

export default Profile;
