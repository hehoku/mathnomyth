import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function Home() {
  return (
    <div className="flex w-3/4 flex-col gap-4 p-10">
      <h2 className="text-2xl font-bold">三角函数</h2>
      <h3 className="text-xl">弧度</h3>
      <Button className="w-40 bg-destructive" variant="destructive">
        Button
      </Button>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
