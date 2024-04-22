import { getCourses, getUserProgress } from "@/db/queries";
import ListCourses from "./_components/ListCourses";

export default async function CoursesPage() {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();
  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      {courses.length > 0 ? (
        <ListCourses
          courses={courses}
          activeCourseId={userProgress?.activeCourseId}
        />
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
}
