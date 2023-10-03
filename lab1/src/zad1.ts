async function getUser(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (res.ok) {
    const { id: userId, name: userName } = await res.json();

    const postsRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );

    if (postsRes.ok) {
      const data = await postsRes.json();

      return {
        userId,
        name: userName,
        posts: data.map(({ id, title, body }) => ({
          postId: id,
          title,
          body,
        })),
      };
    }
  }

  if (res.status === 404) throw res;
}

const id = 1;

try {
  const user = await getUser(id);
  console.log(user);
} catch (e) {
  console.error(`Nie znaleziono użytkownika o id ${id}`);
}
