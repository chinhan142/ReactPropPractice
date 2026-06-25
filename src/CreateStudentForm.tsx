import React, { useState } from "react";
import StudentRecord from "./StudentRecord";

export default function CreateStudentForm({
  open,
  useOpen,
  addStudent,
}: {
  open: boolean;
  useOpen: any;
  addStudent: any;
}) {
  return (
    <>
      {/* <StudentRecord /> */}
      {open && (
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();

            const data = new FormData(event.target);

            const studentName = data.get("studentName");
            console.log(studentName);

            const studentAge = data.get("studentAge");
            console.log(studentAge);

            addStudent(studentName, studentAge);
          }}
        >
          <label htmlFor="">Student name</label>
          <input type="text" name="studentName" />

          <label htmlFor="">Student age</label>
          <input type="number" name="studentAge" />

          <button type="submit">Submit</button>
        </form>
      )}
      <button
        onClick={() => {
          useOpen(true);
        }}
      >
        Hiện Form
      </button>
      <button
        onClick={() => {
          useOpen(false);
        }}
      >
        Ẩn form
      </button>
    </>
  );
}
