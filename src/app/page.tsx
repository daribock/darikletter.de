import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <h2>About me</h2>
      <article className="prose lg:prose-xl">
        <p className="lead">
          👋 Hi, I'm Darius Kletter, a follower of Jesus Christ who loves to
          help others and the ability to code.
        </p>

        <p>
          an Associate Software Engineer at MediaMarktSaturn with a passion for
          designing and solving problems. I love tackling challenges and
          creating efficient, user-friendly solutions. 📖 In my free time, I
          enjoy reading the Bible and volunteering at my local church, Betania
          Ingolstadt. Giving back to the community and growing in faith are
          important aspects of my life. 📝 I'm also passionate about
          note-taking—documenting my thoughts, experiences, and lessons learned.
          My go-to tool for this is Obsidian (highly recommended!). 📫 Want to
          get in touch? Feel free to reach out at daribock@gmail.com.
        </p>
      </article>
    </div>
  );
}
