"use client";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { data: session } = useSession();
  const [tasks, setTasks] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  
  // Form State
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    fetchTasks();
    // @ts-ignore
    if (session?.user?.role === "Admin") fetchUsers();
  }, [session]);

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks");
    if (res.ok) setTasks(await res.json());
  };

  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    if (res.ok) setUsers(await res.json());
  };

  const createTask = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        title: newTaskTitle, 
        status: "To Do",
        assignedTo: assignedTo || null,
        dueDate: dueDate || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) 
      }),
    });
    setNewTaskTitle("");
    setAssignedTo("");
    setDueDate("");
    fetchTasks();
  };

  const updateStatus = async (taskId: string, newStatus: string) => {
    await fetch(`/api/tasks/${taskId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    fetchTasks();
  };

  if (!session) return <div className="p-8 text-center text-white">Loading...</div>;

  // @ts-ignore
  const role = session.user?.role;
  const todoCount = tasks.filter(t => t.status === "To Do").length;
  const inProgressCount = tasks.filter(t => t.status === "In Progress").length;
  const doneCount = tasks.filter(t => t.status === "Done").length;

  return (
    <div className="p-8 max-w-5xl mx-auto text-gray-900">
      <div className="flex justify-between items-center mb-8 text-white">
        <h1 className="text-3xl font-bold">Project Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="font-semibold bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
            Role: {role}
          </span>
          <button onClick={() => signOut({ callbackUrl: '/' })} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow border-t-4 border-blue-500">
          <h2 className="text-gray-500 text-sm uppercase">To Do</h2>
          <p className="text-3xl font-bold">{todoCount}</p>
        </div>
        <div className="bg-white p-4 rounded shadow border-t-4 border-yellow-500">
          <h2 className="text-gray-500 text-sm uppercase">In Progress</h2>
          <p className="text-3xl font-bold">{inProgressCount}</p>
        </div>
        <div className="bg-white p-4 rounded shadow border-t-4 border-green-500">
          <h2 className="text-gray-500 text-sm uppercase">Done</h2>
          <p className="text-3xl font-bold">{doneCount}</p>
        </div>
      </div>

      {role === "Admin" && (
        <form onSubmit={createTask} className="mb-8 flex flex-wrap gap-4 bg-white p-4 shadow rounded items-center">
          <input 
            type="text" placeholder="What needs to be done?" 
            className="border p-2 flex-grow rounded min-w-[200px]"
            value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} required
          />
          <select 
            className="border p-2 rounded"
            value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} required
          >
            <option value="" disabled>Assign To...</option>
            {users.map(u => <option key={u._id} value={u._id}>{u.name}</option>)}
          </select>
          <input 
            type="date" className="border p-2 rounded text-gray-500"
            value={dueDate} onChange={(e) => setDueDate(e.target.value)} required
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Create</button>
        </form>
      )}

      <div className="bg-white shadow rounded overflow-hidden">
        {tasks.length === 0 ? (
          <p className="p-8 text-center text-gray-500">No tasks found.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {tasks.map((task: any) => {
              const isOverdue = new Date(task.dueDate) < new Date() && task.status !== "Done";
              
              return (
                <li key={task._id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div>
                    <h3 className="font-bold text-lg">{task.title}</h3>
                    <div className="text-xs text-gray-500 flex gap-3 mt-1">
                      <span>Assigned to: {task.assignedTo?.name || "Unassigned"}</span>
                      <span className={isOverdue ? "text-red-500 font-bold" : ""}>
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                        {isOverdue && " (OVERDUE)"}
                      </span>
                    </div>
                  </div>
                  
                  <select 
                    className={`border rounded p-2 text-sm font-semibold cursor-pointer outline-none
                      ${task.status === 'To Do' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                      ${task.status === 'In Progress' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : ''}
                      ${task.status === 'Done' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                    `}
                    value={task.status}
                    onChange={(e) => updateStatus(task._id, e.target.value)}
                  >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                  </select>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}