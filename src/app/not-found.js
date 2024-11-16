import Link from "next/link";
export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[80vh] bg-white">
      <div className="text-center p-6">
        {/* 404 Background Section */}
        <div
          className="relative bg-cover bg-center h-80"
          style={{
            backgroundImage:
              "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
          }}
        >
          <h1 className="text-9xl font-bold text-black absolute -top-10 inset-x-0 flex items-center justify-center">
            404
          </h1>
        </div>
        <div className="mt-10">
          <h3 className="text-3xl font-semibold text-gray-500">
            Looks like you&apos;re lost
          </h3>
          <p className="text-lg text-gray-500 mb-6">
            The page you&apos;re looking for is not available!
          </p>
          <Link href="/">
            <span className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 cursor-pointer">
              Go to Home
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
