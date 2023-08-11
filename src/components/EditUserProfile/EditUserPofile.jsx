import React, { useEffect, useState } from "react";
import "./EditUserProfile.css";
import { MdClose } from "react-icons/md";
import { useAuth, useUser } from "../../context";
import Loader from "../Loader/Loader";
import AvatarModal from "../AvatarModal/AvatarModal";

import { toast } from "react-hot-toast";

const EditUserProfile = () => {
  const { user, editUserProfileHandler, isLoading, closeEditUserModal } =
    useUser();
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState({});
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  useEffect(() => {
    if (user?._id !== currentUser?._id) return;
    setUserDetails({
      name: user?.name,
      username: user?.username,
      profilePic: user?.profilePic,
      bio: user?.bio,
      website: user?.website,
    });
  }, [user, currentUser]);

  const handleUserDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    if (!userDetails.name) {
      toast.error("Name can't be empty!");
      return;
    }
    editUserProfileHandler({ ...userDetails });
    setUserDetails(() => ({}));
    closeEditUserModal();
  };

  const handleCloseBtn = () => {
    closeEditUserModal();
    setUserDetails({});
  };
  const openAvatarModal = (e) => {
    e.preventDefault();
    setIsAvatarModalOpen(true);
  };
  const closeAvatarModal = () => setIsAvatarModalOpen(false);

  const setAvatar = (avatar) =>
    setUserDetails((prev) => ({ ...prev, profilePic: avatar }));

  return (
    <article className="edit-modal-wrapper">
      {isLoading && <Loader />}
      {!isLoading && (
        <form className="edit-modal form">
          <span className="close-modal-btn icon" onClick={handleCloseBtn}>
            <MdClose />
          </span>
          <h4 className="form-title">Edit User Profile</h4>
          <div className="form-row edit-avatar">
            <article className="avatar profile-photo">
              <img
                src={userDetails?.profilePic}
                alt="avatar"
                className="image"
              />
            </article>
            <button
              className="btn btn-primary btn-small"
              onClick={openAvatarModal}
            >
              Edit Avatar
            </button>
          </div>

          {!isAvatarModalOpen && (
            <div>
              <div className="form-row">
                <label htmlFor="bio" className="form-label">
                  Bio
                </label>
                <input
                  type="bio"
                  id="bio"
                  name="bio"
                  className="form-input"
                  placeholder="Enter your bio"
                  value={userDetails?.bio}
                  onChange={handleUserDetails}
                />
              </div>
              <div className="form-row">
                <label htmlFor="portfolio-url" className="form-label">
                  Portfolio-url
                </label>
                <input
                  type="text"
                  id="portfolio-url"
                  name="website"
                  className="form-input"
                  placeholder="Enter your portfolio-url"
                  value={userDetails?.website}
                  onChange={handleUserDetails}
                />
              </div>
            </div>
          )}
          {isAvatarModalOpen && (
            <AvatarModal
              closeAvatarModal={closeAvatarModal}
              setAvatar={setAvatar}
            />
          )}
          <button
            className="btn btn-block btn-primary post-btn"
            onClick={handleSubmitBtn}
          >
            Submit
          </button>
        </form>
      )}
    </article>
  );
};

export default EditUserProfile;
