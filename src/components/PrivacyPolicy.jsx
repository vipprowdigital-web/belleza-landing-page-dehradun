import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { baseUrl } from "../utils/baseUrl";

const PrivacyPolicy = () => {
  const [policy, setPolicy] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | ok | error

  useEffect(() => {
    document.title = "Privacy Policy | Belleza Beauty School";
    fetch(`${baseUrl}/policy/public/privacy-policy`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((json) => {
        setPolicy(json.data);
        setStatus("ok");
      })
      .catch(() => setStatus("error"));
  }, []);

  // Admin-written content may be HTML or plain text.
  const isHtml = policy && /<[a-z][\s\S]*>/i.test(policy.description);

  return (
    <main className="min-h-screen bg-white px-6 py-16 sm:px-20">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-primary underline underline-offset-4">
          &larr; Back to home
        </a>

        {status === "loading" && <p className="mt-10">Loading…</p>}

        {status === "error" && (
          <p className="mt-10">
            The privacy policy is currently unavailable. Please try again later.
          </p>
        )}

        {status === "ok" && (
          <>
            <h1 className="mt-8 text-3xl font-bold text-primary">
              {policy.title}
            </h1>
            {policy.updatedAt && (
              <p className="mt-2 text-sm text-gray-500">
                Last updated:{" "}
                {new Date(policy.updatedAt).toLocaleDateString()}
              </p>
            )}
            {isHtml ? (
              <div
                className="mt-8 space-y-4 leading-relaxed [&_a]:underline [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-bold [&_h3]:mt-4 [&_h3]:font-bold [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(policy.description),
                }}
              />
            ) : (
              <div className="mt-8 whitespace-pre-line leading-relaxed">
                {policy.description}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default PrivacyPolicy;
