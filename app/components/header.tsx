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
        <Link href="/dashboard">ダッシュボード</Link>
      </Button>
      <Button variant="ghost" className="text-md">
        <Link href="/setting">設定</Link>
      </Button>
      <Button variant="ghost" className="text-md">
        <Link href="/device">デバイス</Link>
      </Button>
      <Button variant="ghost" className="text-md">
        <Link href="/policy">ポリシー</Link>
      </Button>
      <Button variant="ghost" className="text-md">
        <Link href="/app-management">アプリ</Link>
      </Button>
      <Button variant="ghost" className="text-md">
        <Link href="/">ログアウト</Link>
      </Button>
    </header>
  );
}
