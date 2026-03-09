export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-10 space-y-10">

      <section>
        <h1 className="text-4xl font-bold">Suraj Kumar</h1>
        <p className="text-gray-600 mt-2">
          Software Developer | Backend Systems
        </p>

        <p className="mt-4">
          I build scalable APIs and backend services using Django,
          PostgreSQL and modern web technologies.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Experience</h2>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Built 10+ high-availability REST APIs at DJUBO</li>
          <li>Developed billing and reporting systems</li>
          <li>Designed meta service aggregating multiple APIs</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="mt-3 space-y-2">
          <p>Market Insights Dashboard</p>
          <p>Stocker API</p>
          <p>Hotel Billing APIs</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Links</h2>

        <div className="space-x-4 mt-3">
          <a href="https://github.com" className="underline">GitHub</a>
          <a href="#" className="underline">Resume</a>
        </div>
      </section>

    </main>
  );
}