import React from "react";
import type { Student } from "./interfaces/student.interface";

export default function StudentRecord({
  student,
  deleteStudent,
  addStudent,
}: {
  student: Student;
  deleteStudent: any;
  addStudent: any;
}) {
  console.log("in", student);

  return (
    <>
      <tr>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.age}</td>
        <td>
          <button
            onClick={() => {
              console.log(student.id);

              deleteStudent(student.id);
            }}
          >
            Delete
          </button>
          <button>Edit</button>
        </td>
      </tr>
    </>
  );
}
