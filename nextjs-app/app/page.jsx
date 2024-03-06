"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LoadingPage from "./loading";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";

function Home() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setIsLoading(false);
    };
    fetchCourses();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <>
      <h2>Welcome to next js page</h2>
      <CourseSearch getSearchResult={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  );
}

export default Home;
