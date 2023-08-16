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
export const getPostDate = (createdDate) => {
  const datePosted = new Date(createdDate);
  const timeNow = new Date();
  const milliSec = Math.floor(timeNow - datePosted);
  const sec = Math.floor(milliSec / 1000);
  if (sec > 59) {
    const min = Math.floor(sec / 60);
    if (min > 59) {
      const hr = Math.floor(min / 60);
      if (hr > 23) {
        return datePosted.toLocaleDateString("en-us", {
          day: "numeric",
          year: "numeric",
          month: "short",
        });
      } else {
        return hr > 1 ? `${hr} hrs ago` : `${hr} hr ago`;
      }
    } else {
      return min > 1 ? `${min} mins ago` : `${min} min ago`;
    }
  } else {
    return sec > 1 ? `${sec} secs ago` : `${sec} sec ago`;
  }
};
