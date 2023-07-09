import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "714a6d1e-b5a5-49d7-9659-28ee34e6df4a",
    name: "Adarsh Balika",
    username: "adarshbalika",
    password: "adarshbalika123",
    profilePic: "/images/profile-1.jpg",
    followers: [
      {
        _id: "a4f65f54-a598-42df-adb3-889984e0ec88",
        name: "Dushyant Pratap Singh",
        username: "dushyantcodes",
        profilePic: "/images/profile-2.jpg",
      },
    ],
    following: [],
    bookmarks: [],
    bio: "Add the bio",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "a4f65f54-a598-42df-adb3-889984e0ec88",
    name: "Dushyant Pratap Singh",
    username: "dushyantcodes",
    password: "dushyantcodes123",
    followers: [
      {
        _id: "88h74jhdfd8f-dcf8-44ui44-5555-828jhyuafc",
        name: "John Doe",
        username: "johndoe",
      },
      {
        _id: "478kiout-dcf8-541bghv-7777-820d4afc",
        name: "Sheldon gupta",
        username: "sheldonG",
      },
      {
        _id: "e3af357e-450b-404a-b817-379224539694",
        name: "Vidhushi Saxena",
        username: "vidhushi19",
      },
    ],
    following: [
      {
        _id: "714a6d1e-b5a5-49d7-9659-28ee34e6df4a",
        name: "Adarsh Balika",
        username: "adarshbalika",
        profilePic: "/images/profile-1.jpg",
      },
      {
        _id: "478kiout-dcf8-541bghv-7777-820d4afc",
        name: "Sheldon gupta",
        username: "sheldonG",
        profilePic: "/images/profile-6.jpg",
      },
      {
        _id: "abf99e04-e8e2-40c8-b851-75a968902a73",
        name: "Anuj Kumar",
        username: "annuujj41",
        profilePic: "/images/profile-3.jpg",
      },
    ],
    bookmarks: [],
    bio: "Mai to coder hoon",
    profilePic: "/images/profile-2.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "abf99e04-e8e2-40c8-b851-75a968902a73",
    name: "Anuj Kumar",
    username: "annuujj41",
    password: "anuj111",
    followers: [
      {
        _id: "a4f65f54-a598-42df-adb3-889984e0ec88",
        name: "Dushyant Pratap Singh",
        username: "dushyantcodes",
        profilePic: "/images/profile-2.jpg",
      },
      {
        _id: "e3af357e-450b-404a-b817-379224539694",
        name: "Vidhushi Saxena",
        username: "vidhushi19",
      },
    ],
    following: [
      {
        _id: "37f2383f-8b8a-44c9-b02d-982ce37aa",
        name: "Faheem Khan",
        username: "faheemk237",
      },
      {
        _id: "88h74jhdfd8f-dcf8-44ui44-5555-828jhyuafc",
        name: "John Doe",
        username: "johndoe",
      },
      {
        _id: "e3af357e-450b-404a-b817-379224539694",
        name: "Vidhushi Saxena",
        username: "vidhushi19",
      },
    ],
    bookmarks: [],
    bio: "Add the bio",
    profilePic: "/images/profile-3.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "e3af357e-450b-404a-b817-379224539694",
    name: "Vidhushi Saxena",
    username: "vidhushi19",
    password: "vidhushi",
    followers: [],
    following: [
      {
        _id: "a4f65f54-a598-42df-adb3-889984e0ec88",
        name: "Dushyant Pratap Singh",
        username: "dushyantcodes",
        profilePic: "/images/profile-2.jpg",
      },
    ],
    bookmarks: [],
    bio: "Add the bio",
    profilePic: "/images/profile-4.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "754kiout-dcf8-541bghv-7777-820d4afc",
    name: "Sheldon gupta",
    username: "sheldonG",
    password: "sheldonGG",
    followers: [],
    following: [
      {
        _id: "a4f65f54-a598-42df-adb3-889984e0ec88",
        name: "Dushyant Pratap Singh",
        username: "dushyantcodes",
        profilePic: "/images/profile-2.jpg",
      },
    ],
    bookmarks: [],
    bio: "Mai to simp hoon mujhe kya... ",
    profilePic: "/images/profile-5.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "88h74jhdfd8f-dcf8-44ui44-5555-828jhyuafc",
    name: "John Doe",
    username: "johndoe",
    password: "john889",
    followers: [],
    following: [
      {
        _id: "a4f65f54-a598-42df-adb3-889984e0ec88",
        name: "Dushyant Pratap Singh",
        username: "dushyantcodes",
        profilePic: "/images/profile-2.jpg",
      },
    ],
    bookmarks: [],
    bio: "still awake huh",
    profilePic: "/images/profile-6.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
