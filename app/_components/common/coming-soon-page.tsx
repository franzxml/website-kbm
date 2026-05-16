type ComingSoonPageProps = {
  message?: string;
};

const DEFAULT_MESSAGE = "Coming Soon - sorry projek tidak tepat waktu wkwk";

export default function ComingSoonPage({
  message = DEFAULT_MESSAGE,
}: ComingSoonPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center text-black">
      <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
        {message}
      </h1>
    </main>
  );
}
