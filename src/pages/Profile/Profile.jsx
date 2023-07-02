import React, { useEffect, useId, useState } from "react";
import { getUserService } from "../../services/appServices/userService";
import { useParams } from "react-router";
import { getUserPostsService } from "../../services/appServices/postService";
import { Following, Posts, ProfileCard } from "../../components";
import { useData } from "../../context/DataContext";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams();
  const {
    dataDispatch,
    dataState: { posts },
  } = useData();
  useEffect(() => {
    const getUser = async (userId) => {
      try {
        setLoading(true);
        setError(null);
        const res = await getUserService(userId);
        if (res.status === 200) {
          console.log(res.data.user);

          setUserProfile(() => res.data.user);

          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    getUser(userId);
    const getUserPostHandler = async (userId) => {
      try {
        setLoading(true);
        setError(null);
        const res = await getUserPostsService(userId);
        if (res.status === 200) {
          console.log(res.data.posts);
          setUserPosts(() => res.data.posts);
          dataDispatch({ type: "SET_POSTS", payload: res.data.posts });
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    getUserPostHandler(userId);
  }, [userId, loading]);
  // add loading
  useEffect(() => {
    setUserPosts(posts.filter(({ userId: id }) => userId === id));
  }, [posts]);
  if (loading) {
    return <h4>loading......</h4>;
  }
  const { username, following, followers } = userProfile ?? {};
  //   console.log(username);

  return (
    <div>
      <ProfileCard user={userProfile} />
      <Posts posts={userPosts} />
      <Following following users={following} />
      <Following users={followers} />
    </div>
  );
};

export default Profile;
