import React, { useState } from "react";
import StudentRecord from "./StudentRecord";
import CreateStudentForm from "./CreateStudentForm";
import type { Student } from "./interfaces/student.interface";

export default function StudentManagement() {
  const [studentList, setStudentList] = useState([
    {
      id: 1,
      name: "Toàn",
      age: 20,
    },
    {
      id: 2,
      name: "Dương",
      age: 21,
    },
  ]);
  const [open, useOpen] = useState(false);

  function deleteStudent(studentId: Number) {
    console.log(studentId);

    setStudentList(studentList.filter((student) => student.id !== studentId));
  }

  function addStudent(studentName: string, studentAge: number) {
    let newStudent: Student = {
      id: Date.now(),
      name: studentName,
      age: studentAge,
    };

    setStudentList([...studentList, newStudent]);
  }

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student) => (
            <StudentRecord
              student={student}
              key={student.id}
              deleteStudent={deleteStudent}
              addStudent={addStudent}
            />
          ))}
        </tbody>
      </table>

      <CreateStudentForm
        open={open}
        useOpen={useOpen}
        addStudent={addStudent}
      />
    </>
  );
}
