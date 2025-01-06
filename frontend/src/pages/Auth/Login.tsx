const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-purple-600"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-purple-600"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-purple-600">
            Sign in
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 text-gray-600">
          Don't have an account?
          <a
            rel="noopener noreferrer"
            href="/register"
            className="underline text-gray-800"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
