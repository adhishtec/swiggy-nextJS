"use client";
import Link from "next/link";
import { useState } from "react";
const Student = () => {
  const [list] = useState([
    "Anil",
    "Adhish",
    "Rahul",
    "Raghav",
    "Ravi",
    "Roshan",
  ]);

  return (
    <>
      <div className="student-list">
        <ul>
          {list.map((data, i) => {
            return (
              <>
                <li>
                  <Link href={`/studentlist/${id}`}>{data}</Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Student;
