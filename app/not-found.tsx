import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-32">
      <div aria-hidden className="absolute inset-0 bloom" />
      <div className="lattice-overlay" aria-hidden />
      <div className="container relative text-center">
        <span className="eyebrow justify-center">
          <span aria-hidden className="h-px w-8 bg-current opacity-70" />
          Error 404
          <span aria-hidden className="h-px w-8 bg-current opacity-70" />
        </span>
        <h1 className="display-lg mt-6 text-cream-50">This table isn&rsquo;t set.</h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ash-300">
          The page you were looking for has moved or never existed. Let&rsquo;s get you back to the
          dining room.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="/" iconLeft={<ArrowLeft className="h-4 w-4" aria-hidden />}>
            Back home
          </Button>
          <Button href="/menu" variant="outline">
            View the menu
          </Button>
        </div>
      </div>
    </section>
  );
}
