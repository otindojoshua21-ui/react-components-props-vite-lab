function Article({ title, date, preview }) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-blue-700 mb-1">{title}</h3>
      <small className="text-gray-400 text-sm">{date}</small>
      <p className="text-gray-600 mt-3 leading-relaxed">{preview}</p>
    </article>
  );
}

export default Article;