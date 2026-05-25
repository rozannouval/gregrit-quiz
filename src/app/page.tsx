import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-50">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900">
          Selamat Datang di{" "}
        </h1>
        <h1 className="text-6xl font-extrabold text-emerald-600">
          gregrit-quiz
        </h1>
        <p className="text-zinc-600 max-w-md mx-auto my-6">
          Aplikasi kuis informatika realtime untuk menguji kecepatan dan
          ketepatan coding kamu.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="default" size="lg">
            Mulai Kuis Sekarang
          </Button>
          <Button variant="outline" size="lg">
            Lihat Leaderboard
          </Button>
        </div>
      </div>
    </main>
  );
}
