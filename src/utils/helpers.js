export const mapIdsToPost = (ids, posts) =>
  ids.map((id) => {
    return posts?.find(({ _id }) => _id === id);
  });
export const filterFalsyValue = (arr) => arr.filter((item) => !!item);
export const usersFollowedByUser = (users, user) =>
  users
    ?.find(({ _id }) => user?._id === _id)
    ?.following.map(({ username }) => username);
export const usersFollowingUser = (users, user) =>
  users
    ?.find(({ _id }) => user?._id === _id)
    ?.followers.map(({ username }) => username);

export const usersNotFollowedByUser = (users, user) =>
  users?.filter(
    ({ followers, username }) =>
      username !== user?.username &&
      !followers?.some(({ username }) => username === user?.username)
  );

export const isPostLikedByCurrentUser = (user, likedByUsers) =>
  likedByUsers?.some(({ username }) => username === user.username);
export const isPostUserCurrentUser = (username, user) =>
  username === user?.username;

export const isPostBookmarked = (bookmarks, postId) =>
  bookmarks?.some((id) => id === postId);

export const getUserProfilePic = (users, username) =>
  users.find((user) => user.username === username)?.profilePic;
