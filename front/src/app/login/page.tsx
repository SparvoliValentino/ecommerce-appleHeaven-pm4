import Login from "../Components/Login/Login";

export const LoginView: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 p-4">
            <div className="max-w-[1500px] min-h-screen bg-white m-auto mb-6 rounded-md border-gray-400 border-1 shadow-full-inset flex flex-col justify-evenly items-center">
                <div className=" flex flex-col justify-center items-center">
                    <h2 className="text-[50px] font-semibold">Welcome back to Apple Heaven!</h2>
                    <h3 className="text-[20px] italic">Please Log in before continue with your activities</h3>
                </div>
                <div className="mb-10">
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default LoginView;