import React, { useEffect, useId, useState } from "react";

import { useParams } from "react-router";
import { getUserByUsernameService } from "../../services/appServices/usersService";
import { Following, Posts, ProfileCard, Tabs } from "../../components";
import { usePost, useUser } from "../../context";

const Profile = () => {
  const { userId } = useParams();
  const { user, getUserByUserId, isLoading } = useUser();
  const { posts } = usePost();
  useEffect(() => {
    getUserByUserId(userId);
  }, [userId]);

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
