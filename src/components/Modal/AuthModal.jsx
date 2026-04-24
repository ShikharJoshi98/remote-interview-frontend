import { useState } from "react";
import { LuLoaderCircle, LuX } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import { loginSchema, registerSchema } from "../../validations/authSchema";
import { loginThunk, registerThunk } from "../../store/features/auth/authThunk";

export function AuthModal({ onClose }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth);
    const [isMode, setMode] = useState('login');
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    });
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formError, setFormError] = useState("");
    const [loginError, setLoginError] = useState("");

    const handleChange = (e, type) => {
        const { name, value } = e.target;
        if (type === 'register') {
            setRegisterData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
        else {
            setLoginData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    }
    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            ...registerData,
            confirmPassword
        };
        const result = registerSchema.safeParse(formData);
        if (!result.success) {
            setFormError(result.error.issues[0].message);
            return;
        }
        setFormError("");
        dispatch(registerThunk(registerData))
            .unwrap()
            .then(() => {
                alert('User created successfully')
            })
            .catch((err) => {
                setFormError(err);
            });
        setRegisterData({
            name: '',
            email: '',
            password: '',
            role: ''
        });
    };
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const result = loginSchema.safeParse(loginData);
        if (!result.success) {
            setLoginError(result.error.issues[0].message);
            return;
        }
        setLoginError("");
        dispatch(loginThunk(loginData))
            .unwrap()
            .then((data) => {
                if (data.user.role === "candidate") {
                    navigate("/dashboard/candidate");
                }

                if (data.user.role === "interviewer") {
                    navigate("/dashboard/interviewer");
                }
            })
            .catch((err) => {
                setLoginError(err);
            });
        setLoginData({
            email: '',
            password: ''
        });
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-10 bg-black/70 backdrop-blur-sm">
            <div className="relative w-225 rounded-2xl overflow-hidden border border-white/10 bg-[#0b0f17] shadow-2xl flex">
                <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-white">
                    <LuX size={18} />
                </button>
                <div className="w-1/2 p-10 bg-black hidden md:flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                        <img
                            src="/remote_interview_logo.png"
                            alt="Interview Pro Logo"
                            className="w-8 h-8 object-contain shrink-0"
                        />
                        <h1 className="text-white text-2xl">Interview<span className="text-blue-500">Pro</span></h1>
                    </div>
                    <h2 className="text-3xl mt-8 font-semibold text-white">
                        Ace Interviews.
                    </h2>
                    <p className="text-blue-400 text-3xl font-semibold mt-2">
                        Hire Better.
                    </p>
                    <p className="text-neutral-400 mt-6 text-sm">
                        Built for remote technical interviews with coding challenges, face-to-face interaction, and seamless collaboration.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-neutral-300">
                        <li>✓ Live DSA and coding interviews</li>
                        <li>✓ Video calls with integrated chat</li>
                        <li>✓ Real-time collaborative problem solving</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center md:items-start">
                    <div className="flex gap-4 mt-6">
                        <button onClick={() => setMode('login')} className={`px-6 py-2 ${isMode === 'login' ? 'bg-blue-500/80 text-white rounded-lg' : 'text-neutral-400'} text-sm font-medium`}>
                            Sign In
                        </button>
                        <button onClick={() => setMode('register')} className={`px-6 py-2 ${isMode === 'register' ? 'bg-blue-500/80 text-white rounded-lg' : 'text-neutral-400'} text-sm font-medium`}>
                            Register
                        </button>
                    </div>
                    {
                        isMode === 'login' &&
                        <form onSubmit={handleLoginSubmit} className="mt-8 space-y-4 w-full">
                            <Input type="email" placeholder="Email Address" name="email" value={loginData.email} onChange={(e) => handleChange(e, 'login')} />
                            <Input type="password" placeholder="Password" name="password" value={loginData.password} onChange={(e) => handleChange(e, 'login')} />
                            <div className="flex justify-between items-center w-full text-sm text-neutral-400">
                                <button className="text-blue-400 hover:underline">
                                    Forgot password?
                                </button>
                            </div>
                            {loginError && (
                                <p className="text-red-500 text-center text-sm">
                                    {loginError}
                                </p>
                            )}
                            <button type="submit" className="mt-6 w-full cursor-pointer py-3 bg-linear-to-r from-green-400 to-blue-700 rounded-lg font-medium">
                                {
                                    user.loading ?
                                        <LuLoaderCircle className="animate-spin mx-auto" /> :
                                        'Sign In →'
                                }
                            </button>
                            <p className="text-sm text-neutral-400 mt-4 text-center">
                                Don't have an account?{" "}
                                <span onClick={() => setMode('register')} className="text-blue-400 cursor-pointer">
                                    Sign up for free
                                </span>
                            </p>
                        </form>
                    }
                    {
                        isMode === 'register' &&
                        <form onSubmit={handleRegisterSubmit} className="mt-6 space-y-4 w-full">
                            <Input name="name" value={registerData.name} onChange={(e) => handleChange(e, 'register')} placeholder="Name" />
                            <Input name="email" value={registerData.email} type="email" onChange={(e) => handleChange(e, 'register')} placeholder="Email Address" />
                            <div>
                                <Input name="password" value={registerData.password} type="password" onChange={(e) => handleChange(e, 'register')} placeholder="Password" />
                            </div>
                            <select name="role" placeholder="Select Role" value={registerData.role} onChange={(e) => handleChange(e, 'register')}
                                className={`w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-sm ${registerData.role ? 'text-white' : 'text-white/40'} outline-none`}
                            >
                                <option value="" disabled>Select Role</option>
                                <option value="candidate">Candidate</option>
                                <option value="interviewer">Interviewer</option>
                            </select>
                            <Input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" />
                            {formError && (
                                <p className="text-red-500 text-center text-sm">
                                    {formError}
                                </p>
                            )}
                            <button type="submit" className="w-full py-3 bg-linear-to-r from-green-400 to-blue-500 rounded-lg font-medium">
                                {user.loading ?
                                    <LuLoaderCircle className="animate-spin mx-auto" /> :
                                    'Create Account →'}
                            </button>
                        </form>
                    }
                </div>
            </div>
        </div>
    );
}