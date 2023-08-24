import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <main className="h-screen">
        <div className="flex flex-col items-center justify-center mt-20">
          <span className="text-xl font-bold">
            Welcome To My Assessment Exam!!
          </span>
          <p>Use the links below to navigate to ToDo App</p>
          <ul className="pt-5 font-semibold underline list-disc">
            <li className="hover:text-blue-500">
              <Link to="/todo">Go to ToDo App</Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
