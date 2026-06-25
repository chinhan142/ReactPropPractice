/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function CreateStudentForm({
    open,
    useOpen,
    addStudent,
    handleEdit,
    age,
    name,
    editStudenId,
    setname,
    setage,
}: {
    open: boolean
    useOpen: any
    addStudent: any
    handleEdit: any
    age: number
    name: string
    editStudenId: number
    setname: any
    setage: any
}) {
    return (
        <>
            {/* <StudentRecord /> */}
            {open && (
                <form
                    action=""
                    onSubmit={(event) => {
                        event.preventDefault()

                        const data = new FormData(event.target)
                        const studentName = data.get('studentName')
                        console.log(studentName)

                        const studentAge = data.get('studentAge')
                        console.log(studentAge)
                        if (editStudenId) {
                            handleEdit(studentName, studentAge)
                        } else {
                            addStudent(studentName, studentAge)
                        }
                    }}
                >
                    <label htmlFor="">Student name</label>
                    <input
                        type="text"
                        name="studentName"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />

                    <label htmlFor="">Student age</label>
                    <input
                        type="number"
                        name="studentAge"
                        value={age}
                        onChange={(e) => setage(e.target.value)}
                    />

                    <button type="submit">Submit</button>
                </form>
            )}
            <button
                onClick={() => {
                    useOpen(true)
                }}
            >
                Hiện Form
            </button>
            <button
                onClick={() => {
                    useOpen(false)
                }}
            >
                Ẩn form
            </button>
        </>
    )
}
