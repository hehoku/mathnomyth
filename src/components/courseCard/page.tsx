export default function CourseCard() {
  return (
    <div className="flex cursor-pointer flex-col items-start gap-1 rounded-md px-6 py-4 hover:bg-gray-200">
      <div className="h-60 w-80 rounded-md bg-gray-400"></div>
      <p className="text-gray-500">高一数学</p>
      <p className="text-2xl font-bold">三角函数的周期变化</p>
      <p className="text-base mt-4">本节介绍了三角函数的周期变化</p>
      <span className="rounded bg-[#ebfdff] p-1 text-sm text-[#00bdd6]">
        三角函数
      </span>
    </div>
  );
}
