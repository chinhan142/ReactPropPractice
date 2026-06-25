import { useState } from 'react'
import CreateStudentForm from './CreateStudentForm'
import type { Student } from './interfaces/student.interface'
import StudentRecord from './StudentRecord'

export default function StudentManagement() {
    const [studentList, setStudentList] = useState([
        {
            id: 1,
            name: 'Toàn',
            age: 20,
        },
        {
            id: 2,
            name: 'Dương',
            age: 21,
        },
    ])
    const [open, useOpen] = useState(false)
    const [name, setname] = useState('')
    const [age, setage] = useState(0)

    const [editStudentId, setEditStudentID] = useState<number | null>(null)

    function deleteStudent(studentId: number) {
        console.log(studentId)

        setStudentList(
            studentList.filter((student) => student.id !== studentId),
        )
    }

    function editStudent(studentId: number) {
        console.log(studentId)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useOpen(true)
        const student = studentList.find((student) => student.id === studentId)

        if (student) {
            setEditStudentID(student.id)
            setage(student.age)
            setname(student.name)
        }
    }
    function handleEdit(editStudentName: string, editStudentAge: number) {
        const updatedStudentList = studentList.map((student) =>
            editStudentName === student.name
                ? { ...student, age: editStudentAge, name: editStudentName }
                : student,
        )
        setStudentList(updatedStudentList)
    }

    function addStudent(studentName: string, studentAge: number) {
        const newStudent: Student = {
            id: Date.now(),
            name: studentName,
            age: studentAge,
        }

        setStudentList([...studentList, newStudent])
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
                            editStudent={editStudent}
                        />
                    ))}
                </tbody>
            </table>

            <CreateStudentForm
                open={open}
                useOpen={useOpen}
                addStudent={addStudent}
                handleEdit={handleEdit}
                editStudenId={editStudentId!}
                name={name}
                age={age}
                setname={setname}
                setage={setage}
            />
        </>
    )
}
