import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axiosInstance from '../axiosInstance';
import { setUser } from '../redux/userSlice';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post('/authentication/login', {
        email: data.email,
        password: data.password,
        remember_me: 1,
      });

      const { user, access_token } = response.data.data;

      // Simpan token di localStorage
      localStorage.setItem('token', access_token);

      // Simpan user ke Redux
      dispatch(setUser({ name: user.name, token: access_token }));

      // Redirect ke dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      // Handle error (misalnya, tampilkan pesan error)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500 focus:border-blue-500"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500 focus:border-blue-500 mt-4"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
