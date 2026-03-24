export default function Home() {
  return (
    <section id="home">
      <div className="home-bg-circle circle1" />
      <div className="home-bg-circle circle2" />

      <div className="home-eyebrow fade-up">Full-Stack Developer</div>

      <h1 className="fade-up delay-1">
        Crafting <em>digital</em><br />experiences.
      </h1>

      <p className="home-sub fade-up delay-2">
        I design and build robust, scalable web applications — from pixel-perfect
        interfaces to resilient back-end systems.
      </p>

      <div className="home-cta fade-up delay-3">
        <a href="#projects" className="btn btn-primary">View my work →</a>
        <a href="#contact" className="btn btn-outline">Get in touch</a>
      </div>

      <div className="scroll-hint fade-up delay-4">
        <div className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
}
