function About({ image, about }) {
  return (
    <aside className="flex items-center gap-6 bg-blue-50 border border-blue-100 rounded-xl p-6 mx-8 my-6 shadow-sm">
      <img
        src={image}
        alt="blog logo"
        className="w-24 h-24 rounded-full object-cover border-4 border-blue-300"
      />
      <p className="text-gray-600 text-base leading-relaxed">{about}</p>
    </aside>
  );
}

export default About;