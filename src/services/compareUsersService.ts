import axios from "axios";

export async function getUserRepos(username: string) {
  const userRepos = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );
  return userRepos;
}
