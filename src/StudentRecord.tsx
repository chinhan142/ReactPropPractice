/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Student } from './interfaces/student.interface'

export default function StudentRecord({
    student,
    deleteStudent,
    editStudent,
}: {
    student: Student
    deleteStudent: any
    editStudent: (studentId: number) => void
}) {
    console.log('in', student)

    return (
        <>
            <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>
                    <button
                        onClick={() => {
                            console.log(student.id)

                            deleteStudent(student.id)
                        }}
                    >
                        Delete
                    </button>
                    <button onClick={() => editStudent(student.id)}>
                        Edit
                    </button>
                </td>
            </tr>
        </>
    )
}
