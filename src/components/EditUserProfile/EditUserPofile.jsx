import React, { useEffect, useState } from "react";
import "./EditUserProfile.css";
import { MdClose } from "react-icons/md";
import { useAuth, usePost, useUser } from "../../context";
import Loader from "../Loader/Loader";

const EditUserProfile = () => {
  const { user, editUserProfileHandler, isLoading, closeEditUserModal } =
    useUser();
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState({});

  //   const getUserProfile = (userId) => users?.find(({ _id }) => _id === userId);
  //   useEffect(() => {
  //     setUserDetails(getUserProfile(editUserId));
  //   }, [editUserId]);

  useEffect(() => {
    if (user?._id !== currentUser?._id) return;
    setUserDetails({
      name: user?.name,
      username: user?.username,
      profileImg: user?.postImg,
      bio: user?.bio,
      website: user?.website,
    });
  }, [user]);

  const handleUserDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    // handle empty create post
    editUserProfileHandler({ ...userDetails });
    setUserDetails(() => ({}));
    closeEditUserModal();
  };

  const handleCloseBtn = () => {
    closeEditUserModal();
    setUserDetails({});
  };

  return (
    <article className="edit-modal-wrapper">
      {isLoading && <Loader />}
      {!isLoading && (
        <form className="edit-modal form">
          <span className="close-modal-btn icon" onClick={handleCloseBtn}>
            <MdClose />
          </span>
          <h4 className="form-title">Edit User Profile</h4>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="type here"
              id="name"
              name="name"
              className="form-input"
              value={userDetails?.name}
              onChange={handleUserDetails}
            />
          </div>

          <div className="form-row">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              placeholder="type here"
              id="username"
              name="username"
              className="form-input"
              value={userDetails?.username}
              onChange={handleUserDetails}
            />
          </div>

          <div className="form-row">
            <label htmlFor="password" className="form-label">
              Bio
            </label>
            <textarea
              type="bio"
              id="bio"
              name="bio"
              className="form-input"
              placeholder="Enter your bio"
              value={userDetails?.bio}
              onChange={handleUserDetails}
            />
          </div>

          <button
            className="btn btn-block btn-primary post-btn"
            onClick={handleSubmitBtn}
          >
            Submit
          </button>
        </form>

        // <form className="edit-modal form">
        //   <span className="close-modal-btn icon" onClick={handleCloseBtn}>
        //     <MdClose />
        //   </span>
        //   <h3 className="form-title">Edit User</h3>
        //   <div className="form-row">
        //     <label htmlFor="name">Name : </label>
        //     <input
        //       type="text"
        //       name="name"
        //       id="name"

        //     ></input>
        //   </div>
        //   <div className="form-row">
        //     <label htmlFor="username">Username : </label>
        //     <input
        //       type="text"
        //       name="username"
        //       id="username"

        //     ></input>
        //   </div>

        //   <div className="form-row">
        //     <label htmlFor="bio">Bio : </label>
        //     <textarea
        //       name="bio"
        //       id="bio"
        //       value={userDetails?.bio}
        //       onChange={handleUserDetails}
        //     ></textarea>
        //   </div>
        //   <div className="img-container">
        //     <img src={userDetails?.profileImg} alt="" className="img" />
        //   </div>
        //   <button
        //     className="btn btn-block btn-primary post-btn"
        //     onClick={handleSubmitBtn}
        //   >
        //     Submit
        //   </button>
        // </form>
      )}
    </article>
  );
};

export default EditUserProfile;
