import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

// export const users = [
//   {
//     _id: "714a6d1e-b5a5-49d7-9659-28ee34e6df4a",
//     name: "Adarsh Balika",
//     username: "adarshbalika",
//     password: "adarshbalika123",
//     profilePic: "/images/profile-1.jpg",
//     followers: [
//       {
//         _id: "a4f65f54-a598-42df-adb3-889984e0ec88",
//         name: "Dushyant Pratap Singh",
//         username: "dushyantcodes",
//         profilePic: "/images/profile-2.jpg",
//       },
//     ],
//     following: [],
//     bookmarks: [],
//     bio: "Add the bio",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
//   {
//     _id: "a4f65f54-a598-42df-adb3-889984e0ec88",
//     name: "Dushyant Pratap Singh",
//     username: "dushyantcodes",
//     password: "dushyantcodes123",
//     followers: [
//       {
//         _id: "88h74jhdfd8f-dcf8-44ui44-5555-828jhyuafc",
//         name: "John Doe",
//         username: "johndoe",
//         profilePic: "/images/profile-6.jpg",
//       },

//       {
//         _id: "e3af357e-450b-404a-b817-379224539694",
//         name: "Vidhushi Saxena",
//         username: "vidhushi19",
//       },
//     ],
//     following: [
//       {
//         _id: "714a6d1e-b5a5-49d7-9659-28ee34e6df4a",
//         name: "Adarsh Balika",
//         username: "adarshbalika",
//         profilePic: "/images/profile-1.jpg",
//       },

//       {
//         _id: "abf99e04-e8e2-40c8-b851-75a968902a73",
//         name: "Anuj Kumar",
//         username: "annuujj41",
//         profilePic: "/images/profile-3.jpg",
//       },
//     ],
//     bookmarks: [],
//     bio: "Mai to coder hoon",
//     profilePic: "/images/profile-2.jpg",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },

//   {
//     _id: "abf99e04-e8e2-40c8-b851-75a968902a73",
//     name: "Anuj Kumar",
//     username: "annuujj41",
//     password: "anuj111",
//     followers: [
//       {
//         _id: "a4f65f54-a598-42df-adb3-889984e0ec88",
//         name: "Dushyant Pratap Singh",
//         username: "dushyantcodes",
//         profilePic: "/images/profile-2.jpg",
//       },
//       {
//         _id: "e3af357e-450b-404a-b817-379224539694",
//         name: "Vidhushi Saxena",
//         username: "vidhushi19",
//       },
//     ],
//     following: [
//       {
//         _id: "37f2383f-8b8a-44c9-b02d-982ce37aa",
//         name: "Faheem Khan",
//         username: "faheemk237",
//       },
//       {
//         _id: "88h74jhdfd8f-dcf8-44ui44-5555-828jhyuafc",
//         name: "John Doe",
//         username: "johndoe",
//         profilePic: "/images/profile-6.jpg",
//       },
//       {
//         _id: "e3af357e-450b-404a-b817-379224539694",
//         name: "Vidhushi Saxena",
//         username: "vidhushi19",
//       },
//     ],
//     bookmarks: [],
//     bio: "Add the bio",
//     profilePic: "/images/profile-3.jpg",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
//   {
//     _id: "e3af357e-450b-404a-b817-379224539694",
//     name: "Vidhushi Saxena",
//     username: "vidhushi19",
//     password: "vidhushi",
//     followers: [],
//     following: [
//       {
//         _id: "a4f65f54-a598-42df-adb3-889984e0ec88",
//         name: "Dushyant Pratap Singh",
//         username: "dushyantcodes",
//         profilePic: "/images/profile-2.jpg",
//       },
//     ],
//     bookmarks: [],
//     bio: "Add the bio",
//     profilePic: "/images/profile-4.jpg",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },

//   {
//     _id: "88h74jhdfd8f-dcf8-44ui44-5555-828jhyuafc",
//     name: "John Doe",
//     username: "johndoe",
//     password: "john889",
//     followers: [],
//     following: [
//       {
//         _id: "a4f65f54-a598-42df-adb3-889984e0ec88",
//         name: "Dushyant Pratap Singh",
//         username: "dushyantcodes",
//         profilePic: "/images/profile-2.jpg",
//       },
//     ],
//     bookmarks: [],
//     bio: "still awake huh",
//     profilePic: "/images/profile-6.jpg",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
//   {
//     _id: "ab8zWjEeXd",
//     name: "James",
//     profilePic: "/images/profile-9.jpg",
//     password: "james@123",
//     username: "jamesmurf",
//     bio: "Fashion aficionado",
//     website: "https://jamesmurf.com",

//     createdAt: "2018-05-02T01:06:00+05:30",
//     updatedAt: formatDate(),
//     following: [],
//     followers: [],
//     bookmarks: [],
//   },
// ];
export const users = [
  {
    _id: "t7cZfWIp-q",
    name: "Emily",
    password: "emily@123Smith",
    username: "emilysmith",
    bio: "Aspiring Frontend Developer",
    website: "https://emilysmith.tech",
    createdAt: "2019-02-02T01:06:00+05:30",
    updatedAt: formatDate(),
    profilePic: "https://i.imgur.com/3koLVx8.png",
    following: [
      {
        _id: "LCrc9f0Zl0",
        name: "Aditya",
        username: "adityaj",
      },
      {
        _id: "1T6Be1QpLm",
        name: "Jacob",
        username: "jacobmitch",
      },
      {
        _id: "o5gzWjEeX_",
        name: "Rohan",
        username: "rohaaan",
      },
      {
        _id: "79Gksh9otl",
        name: "Sarah",
        username: "wilsarah",
      },
    ],
    followers: [
      {
        _id: "ab8zWjEeXd",
        name: "James",
        username: "jamesmurf",
      },
      {
        _id: "qq8zWjEeXd",
        name: "Olivia",
        username: "livparker",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "79Gksh9otl",
    name: "Sarah",
    password: "sarah123",
    username: "wilsarah",
    bio: "Be Yourself!",
    website: "https://sarahwilson.com",
    createdAt: "2018-06-12T01:06:00+05:30",
    updatedAt: formatDate(),
    profilePic: "https://i.imgur.com/usR4cPn.png",
    following: [
      {
        _id: "1T6Be1QpLm",
        name: "Jacob",
        username: "jacobmitch",
      },
    ],
    followers: [
      {
        _id: "t7cZfWIp-q",
        name: "Emily",
        username: "emilysmith",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "1T6Be1QpLm",
    name: "Jacob",
    password: "jacob123",
    username: "jacobmitch",
    bio: "An adventure-seeking explorer",
    website: "https://jacobmitchell.com",
    createdAt: "2018-11-26T01:06:00+05:30",
    updatedAt: formatDate(),
    profilePic: "https://i.imgur.com/dGLRy0M.png",
    following: [
      {
        _id: "ab8zWjEeXd",
        name: "James",
        username: "jamesmurf",
      },
    ],
    followers: [
      {
        _id: "79Gksh9otl",
        name: "Sarah",
        username: "wilsarah",
      },
      {
        _id: "t7cZfWIp-q",
        name: "Emily",
        username: "emilysmith",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "LCrc9f0Zl0",
    name: "Aditya",
    password: "aditya123",
    username: "adityaj",
    bio: "Composing musical journeys",
    website: "https://adityajoshi.com",
    createdAt: "2017-05-15T01:06:00+05:30",
    updatedAt: formatDate(),
    profilePic: "https://i.imgur.com/hRwELzq.png",
    following: [],
    followers: [
      {
        _id: "t7cZfWIp-q",
        name: "Emily",
        username: "emilysmith",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "o5gzWjEeX_",
    name: "Rohan",
    password: "rohan123",
    username: "rohaaan",
    bio: "Exploring one delicious bite at a time!",
    website: "https://rohan-roy.com",
    createdAt: "2019-08-19T01:06:00+05:30",
    updatedAt: formatDate(),
    profilePic: "https://i.imgur.com/07fk2I9.png",
    following: [],
    followers: [
      {
        _id: "t7cZfWIp-q",
        name: "Emily",
        username: "emilysmith",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "M1NR81Bzlz",
    name: "Kriti",
    password: "kriti123",
    username: "imkriti",
    bio: "Storyteller Extraordinaire",
    website: "https://kriti-desai.com",
    createdAt: "2021-01-11T01:06:00+05:30",
    updatedAt: formatDate(),
    profilePic: "https://i.imgur.com/Rytba1u.png",
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "qq8zWjEeXd",
    name: "Olivia",
    password: "olivia@123",
    username: "livparker",
    bio: "A Creative Doodlebug",
    website: "https://oliviadraws.com",
    createdAt: "2020-01-22T01:06:00+05:30",
    updatedAt: formatDate(),
    profilePic: "https://i.imgur.com/07fk2I9.png",
    following: [
      {
        _id: "t7cZfWIp-q",
        name: "Emily",
        username: "emilysmith",
      },
    ],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "ab8zWjEeXd",
    name: "James",
    password: "james@123",
    username: "jamesmurf",
    bio: "Fashion aficionado",
    website: "https://jamesmurf.com",
    createdAt: "2018-05-02T01:06:00+05:30",
    updatedAt: formatDate(),
    profilePic: "https://i.imgur.com/dGLRy0M.png",
    following: [
      {
        _id: "t7cZfWIp-q",
        name: "Emily",
        username: "emilysmith",
      },
    ],
    followers: [
      {
        _id: "1T6Be1QpLm",
        name: "Jacob",
        username: "jacobmitch",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "M1NR81Bert",
    name: "Ava",
    password: "ava@123",
    username: "avaturn",
    bio: "Haute Couture Maven",
    website: "https://turnerava.com",
    createdAt: "2020-10-10T01:06:00+05:30",
    updatedAt: formatDate(),
    profilePic: "https://i.imgur.com/dGLRy0M.png",
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "1NR81Bzmuh",
    name: "Aryan",
    password: "aryan@123",
    username: "aryan987",
    bio: "An Ambitious Trailblazer",
    website: "https://aryanpatel.com",
    createdAt: "2019-04-15T01:06:00+05:30",
    updatedAt: formatDate(),
    profilePic: "https://i.imgur.com/hRwELzq.png",
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "a4f65f54-a598-42df-adb3-889984e0ec88",
    name: "Dushyant Pratap Singh",
    username: "dushyantcodes",
    password: "dushyantcodes123",
    website: "https://asdpatel.com",
    createdAt: "2019-04-15T01:06:00+05:30",
    updatedAt: formatDate(),
    profilePic: "https://i.imgur.com/usR4cPn.png",
    following: [],
    followers: [],
    bookmarks: [],
  },
];
