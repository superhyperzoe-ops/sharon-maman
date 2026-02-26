import { FAVICON_VERSION } from "@/lib/site";

export default function DebugHeadPage() {
  const faviconSuffix = `?v=${FAVICON_VERSION}`;

  return (
    <main className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-ink">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Debug head / favicons</h1>
        <p className="text-sm text-ink/70">
          Cette page liste les balises attendues et des liens directs vers les assets.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
          Balises attendues
        </h2>
        <div className="space-y-2 rounded-md border border-sand/40 bg-white px-4 py-3 text-sm">
          <code className="block">
            {`<link rel="icon" href="/favicon.ico${faviconSuffix}" sizes="any" />`}
          </code>
          <code className="block">
            {`<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png${faviconSuffix}" />`}
          </code>
          <code className="block">
            {`<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png${faviconSuffix}" />`}
          </code>
          <code className="block">
            {`<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png${faviconSuffix}" />`}
          </code>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
          Liens directs
        </h2>
        <ul className="space-y-2 text-sm text-ink/80">
          <li>
            <a className="underline" href={`/favicon.ico${faviconSuffix}`}>
              /favicon.ico{faviconSuffix}
            </a>
          </li>
          <li>
            <a className="underline" href={`/favicon-32x32.png${faviconSuffix}`}>
              /favicon-32x32.png{faviconSuffix}
            </a>
          </li>
          <li>
            <a className="underline" href={`/favicon-16x16.png${faviconSuffix}`}>
              /favicon-16x16.png{faviconSuffix}
            </a>
          </li>
          <li>
            <a className="underline" href={`/apple-touch-icon.png${faviconSuffix}`}>
              /apple-touch-icon.png{faviconSuffix}
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
