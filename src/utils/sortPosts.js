export const sortPosts = (posts, sortBy) => {
  switch (sortBy) {
    case "Trending":
      return posts.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
    case "Latest":
      return posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    case "Oldest":
      return posts.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    default:
      return posts;
  }
};
