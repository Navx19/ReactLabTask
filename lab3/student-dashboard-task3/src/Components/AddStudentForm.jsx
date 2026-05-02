import { useState, useContext, useEffect } from "react";
import { StudentContext } from "../context/StudentContext";

function AddStudentForm() {
  const { students, setStudents } = useContext(StudentContext);

  const [form, setForm] = useState({
    name: "",
    id: "",
    major: "",
    gpa: "",
    courses: ""
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.id.trim()) {
      newErrors.id = "ID is required";
    } else if (!/^\d+$/.test(form.id)) {
      newErrors.id = "ID must be numeric";
    } else if (students.some((s) => s.id === form.id)) {
      newErrors.id = "ID must be unique";
    }

    if (!form.major.trim()) newErrors.major = "Major is required";

    if (!form.gpa) {
      newErrors.gpa = "GPA required";
    } else if (form.gpa < 0 || form.gpa > 4) {
      newErrors.gpa = "GPA must be between 0–4";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newStudent = {
      name: form.name,
      id: form.id,
      major: form.major,
      gpa: parseFloat(form.gpa),
      avatar: "/images/cat2.jpg", // default
      courses: form.courses.split(",").map((c) => ({
        name: c.trim(),
        color: "blue"
      }))
    };

    setStudents([...students, newStudent]);

    setForm({
      name: "",
      id: "",
      major: "",
      gpa: "",
      courses: ""
    });

    setErrors({});
    setShowSuccess(true);
  }

  return (
    <>
      {showSuccess && (
        <div className="success-notification">
          ✅ Student added successfully!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <h2>Add Student</h2>

        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        <p className="error">{errors.name}</p>

      <input name="id" placeholder="Student ID" value={form.id} onChange={handleChange} />
      <p className="error">{errors.id}</p>

      <input name="major" placeholder="Major" value={form.major} onChange={handleChange} />
      <p className="error">{errors.major}</p>

      <input name="gpa" placeholder="GPA" value={form.gpa} onChange={handleChange} />
      <p className="error">{errors.gpa}</p>

      <input name="courses" placeholder="Courses (comma separated)" value={form.courses} onChange={handleChange} />

      <button type="submit">Add Student</button>
      </form>
    </>
  );
}

export default AddStudentForm;