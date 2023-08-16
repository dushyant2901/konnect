import React from "react";
import "./AvatarModal.css";
import avatar1 from "../../assets/images/profile-1.jpg";
import avatar2 from "../../assets/images/profile-2.jpg";
import avatar3 from "../../assets/images/profile-3.jpg";
import avatar4 from "../../assets/images/profile-4.jpg";
import avatar5 from "../../assets/images/profile-5.jpg";
import avatar6 from "../../assets/images/profile-6.jpg";
import avatar7 from "../../assets/images/profile-7.jpg";
import avatar8 from "../../assets/images/profile-8.jpg";
import { MdClose } from "react-icons/md";
const AvatarModal = ({ closeAvatarModal, setAvatar }) => {
  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
  ];
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
