interface PostsProps {
  resource: any;
}

function Posts({ resource }: PostsProps) {
  const posts = resource.posts.read();

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
