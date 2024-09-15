import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-16 flex items-center border-b justify-between gap-5 px-5">
      <Button variant="ghost" className="font-bold text-xl">
        <Link href="/">MyEMM Next</Link>
      </Button>
      <span className="flex-1"></span>
      <Button variant="ghost" className="text-md">
        <Link href="/">デバイス</Link>
      </Button>
      <Button variant="ghost" className="text-md">
        <Link href="/">ポリシー</Link>
      </Button>
    </header>
  );
}
