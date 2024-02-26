import Form from "../components/Form";

function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-200 ">
      {/* <img src="/logo.png" alt="Logo" /> */}
      <div className="p-6 bg-white rounded-xl shadow-xl">
        <Form />
      </div>
    </div>
  );
}

export default LoginPage;
