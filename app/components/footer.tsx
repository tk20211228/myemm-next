import { ModeToggle } from "../../components/mode-toggle";

export default function Footer() {
  return (
    <footer className="flex sticky top-full items-center justify-between border-t px-5">
      <div className="flex text-sm text-muted-foreground p-4">
        {/* &copy; {new Date().getFullYear()} */}
        {"  &copy 2024"}
      </div>

      <ModeToggle />
    </footer>
  );
}
