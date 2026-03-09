export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-16">

      {/* HERO */}
      <section>
        <h1 className="text-4xl font-bold">Suraj Kumar Parida</h1>
        <p className="text-lg text-gray-600 mt-2">
          Backend Developer | Python • Django • APIs
        </p>

        <p className="mt-4 text-gray-700">
          I build scalable backend services, REST APIs, and data-driven
          applications using Django and modern web technologies.
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href="https://github.com"
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Resume
          </a>
        </div>
      </section>


      {/* ABOUT */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">About</h2>

        <p className="text-gray-700">
          Backend-focused developer experienced in designing scalable
          systems using Python and Django. I specialize in building
          REST APIs, asynchronous processing with RabbitMQ and Celery,
          and optimizing backend services for production environments.
        </p>
      </section>


      {/* EXPERIENCE */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Experience</h2>

        <div>
          <h3 className="font-semibold">DJUBO — Associate Engineer</h3>
          <p className="text-sm text-gray-500">May 2024 – April 2025</p>

          <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700">
            <li>Improved 4 Django backend services for hotel management systems.</li>
            <li>Built 10+ high-availability REST APIs using Django REST Framework.</li>
            <li>Implemented asynchronous report generation using Celery and RabbitMQ.</li>
            <li>Automated data workflows reducing manual processing time.</li>
            <li>Resolved critical MySQL billing data issues in production systems.</li>
          </ul>
        </div>
      </section>


      {/* PROJECTS */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Projects</h2>

        <div className="space-y-6">

          <div>
            <h3 className="font-semibold">Algorithmic Trading Bot</h3>

            <p className="text-gray-700">
              Trading platform built with Django backend and React frontend
              integrating AngelOne SmartAPI for automated trading and portfolio
              analytics.
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Django • React • PostgreSQL • OAuth • Docker
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Cart Price History Scraper</h3>

            <p className="text-gray-700">
              Python scraper that tracks product prices across e-commerce
              platforms and provides price history insights.
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Python • BeautifulSoup • SQLite • Cron
            </p>
          </div>

        </div>
      </section>


      {/* TECH STACK */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <h4 className="font-semibold mb-2">Backend</h4>
            <ul className="text-gray-700 space-y-1">
              <li>Python</li>
              <li>Django</li>
              <li>REST APIs</li>
              <li>RabbitMQ</li>
              <li>Redis</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Frontend</h4>
            <ul className="text-gray-700 space-y-1">
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Databases</h4>
            <ul className="text-gray-700 space-y-1">
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Tools</h4>
            <ul className="text-gray-700 space-y-1">
              <li>Git</li>
              <li>Linux</li>
              <li>Postman</li>
              <li>Docker</li>
            </ul>
          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>

        <p className="text-gray-700">
          Email: dev.surajkp@gmail.com
        </p>

        <p className="text-gray-700">
          LinkedIn: linkedin.com/in/parida-suraj
        </p>
      </section>

    </main>
  );
}