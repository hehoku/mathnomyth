import CourseCard from "@/components/courseCard/page";
import Nav from "@/components/nav/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-10">
      <Nav />
      <div className="mt-10 flex w-5/6 flex-row flex-wrap items-start justify-start gap-8">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </main>
  );
}
