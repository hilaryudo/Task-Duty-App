import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "../components/Form";

const EditTask = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
  });

  // ✅ Fetch Single Task
  const getTask = async () => {
    try {
      const res = await fetch(
        `https://blog-ou47.onrender.com/api/v1/tasks/${taskId}`
      );
      const data = await res.json();

      if (data?.task) {
        setFormData({
          title: data.task.title || "",
          description: data.task.description || "",
          tags: data.task.tags || "",
        });
      }
    } catch (error) {
      console.log("Error fetching task:", error);
    }
  };

  useEffect(() => {
    getTask();
  }, [taskId]);

  // ✅ Update Task (PUT)
  const updateTask = async () => {
    try {
      const res = await fetch(
        `https://blog-ou47.onrender.com/api/v1/tasks/${taskId}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      console.log("Updated:", data);

      navigate("/all-tasks"); // ✅ redirect
    } catch (error) {
      console.log("Error updating task:", error);
    }
  };

  // ✅ Form handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask();
  };

  return (
    <div>
      <main className="wrapper">
        <Form
          formTitle="Edit Task"
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
};

export default EditTask;