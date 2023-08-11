import React from "react";
import "./AvatarModal.css";
import img1 from "../../images/profile-9.jpg";
import img2 from "../../images/profile-5.jpg";
import img3 from "../../images/profile-6.jpg";
import img4 from "../../images/profile-7.jpg";
import { MdClose } from "react-icons/md";
const AvatarModal = ({ closeAvatarModal, setAvatar }) => {
  const avatars = [img1, img2, img3, img4, img1, img1, img1, img3];
  return (
    <article className="avatar-modal">
      <span className=" icon" onClick={closeAvatarModal}>
        <MdClose />
      </span>
      <section className="avatars">
        {avatars.map((avatar) => (
          <article
            className="avatar profile-photo"
            onClick={() => setAvatar(avatar)}
          >
            <img src={avatar} alt="avatar" className="image" />
          </article>
        ))}
      </section>
    </article>
  );
};

export default AvatarModal;
