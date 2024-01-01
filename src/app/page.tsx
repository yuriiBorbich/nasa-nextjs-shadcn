import { ThemeToggle } from '@/components/theme-toogler';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex items-center w-full justify-end">
        <ThemeToggle />
      </div>
    </main>
  )
}
