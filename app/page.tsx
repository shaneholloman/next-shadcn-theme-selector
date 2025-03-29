import { ThemeSelector } from "@/components/theme-selector";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-svh">
      <div className="w-[340px]">
        <ThemeSelector />
      </div>
    </div>
  );
}
