import CourseCard from "@/components/courseCard/page";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-10">
      <div className="mt-10 flex w-5/6 flex-row flex-wrap items-start justify-start gap-8">
        <Link href="periodic-101">
          <CourseCard />
        </Link>
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </main>
  );
}
