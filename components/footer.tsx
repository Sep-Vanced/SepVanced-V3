export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-background/70 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
        <p className="text-center text-xs text-muted-foreground sm:text-left sm:text-sm">
          {`© ${year} Joseph M. Mangubat. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
