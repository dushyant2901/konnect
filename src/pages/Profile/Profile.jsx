import React, { useState, useEffect } from "react";

import { useParams } from "react-router";

import { Following, Loader, Posts, ProfileCard, Tabs } from "../../components";
import { usePost, useUser } from "../../context";
import EditUserProfile from "../../components/EditUserProfile/EditUserPofile";

const Profile = () => {
  const { userId } = useParams();
  const { user, getUserByUserId, isLoading, users, isEditProfileModalOpen } =
    useUser();

  const { posts } = usePost();

  useEffect(() => {
    getUserByUserId(userId);
  }, [userId, users]);

  const [activeTab, setActiveTab] = useState("posts");

  const handleTabBtnClick = (e) => {
    setActiveTab(e.target.textContent.toLowerCase());
  };

  const userPosts = posts?.filter(
    ({ username }) => username === user?.username
  );

  const { following, followers } =
    users?.find(({ _id }) => _id === user?._id) ?? {};

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <ProfileCard user={user} />
          <Tabs
            posts={<Posts posts={userPosts} />}
            followers={<Following users={followers} />}
            following={<Following isTypeFollowing users={following} />}
            activeTab={activeTab}
            handleTabBtnClick={handleTabBtnClick}
          />
          {isEditProfileModalOpen && <EditUserProfile />}
        </>
      )}
    </div>
  );
};

export default Profile;
