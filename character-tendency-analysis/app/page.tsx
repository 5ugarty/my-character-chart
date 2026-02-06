import { CharacterChart } from "@/components/character-chart"

export default function Page() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-accent-foreground">
      <CharacterChart />
    </main>
  )
}
