import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main className="grid gap-6 px-8 pb-10 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;