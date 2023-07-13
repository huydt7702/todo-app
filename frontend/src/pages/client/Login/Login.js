import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import config from '~/config';
import Image from '~/components/Image/Image';
import { signInWithGoogle } from '~/firebaseConfig';

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleSignInGoogle = () => {
        signInWithGoogle();
    };

    return (
        <div className="flex">
            <div className="flex flex-col items-center justify-center p-12 w-[30%] min-w-max">
                <Image src={images.logo} alt="Logo" className="w-24 rounded-md" />
                <h1 className="font-semibold text-3xl mt-6 mb-2">Welcome back</h1>
                <p className="text-[#555] text-2xl">Please enter your details.</p>

                <form className="flex flex-col items-center mt-10 gap-4 w-full" onSubmit={handleSubmit}>
                    <input
                        className="w-full text-2xl p-4 border-[1px] border-solid border-[#999] rounded-md"
                        type="text"
                        placeholder="Enter your username"
                    />
                    <input
                        className="w-full text-2xl p-4 border-[1px] border-solid border-[#999] rounded-md"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <button className="bg-[#333] border-[1px] border-solid border-[#333] text-white w-full p-4 rounded-md text-2xl hover:bg-opacity-90">
                        Continue
                    </button>
                </form>

                <span className="my-6 text-[#555] text-2xl">OR</span>

                <div className="flex flex-col items-center w-full gap-4">
                    <button
                        className="bg-white border-[1px] border-solid border-[#ccc] text-2xl text-[#333] w-full p-4 rounded-md hover:bg-[rgba(0,0,0,0.05)]"
                        onClick={handleSignInGoogle}
                    >
                        <FontAwesomeIcon icon={faGoogle} className="text-red-600" />
                        <span className="ml-3">Continue with Google</span>
                    </button>
                    <button className="bg-white border-[1px] border-solid border-[#ccc] text-2xl text-[#333] w-full p-4 rounded-md hover:bg-[rgba(0,0,0,0.05)]">
                        <FontAwesomeIcon icon={faFacebook} className="text-[#385898]" />
                        <span className="ml-3">Continue with Facebook</span>
                    </button>
                    <button className="bg-white border-[1px] border-solid border-[#ccc] text-2xl text-[#333] w-full p-4 rounded-md hover:bg-[rgba(0,0,0,0.05)]">
                        <FontAwesomeIcon icon={faApple} className="text-black" />
                        <span className="ml-3">Continue with Apple</span>
                    </button>
                </div>

                <p className="text-2xl mt-8">
                    Don't have an account?{' '}
                    <Link className="font-medium" to={config.routes.register}>
                        Sign up
                    </Link>
                </p>
            </div>
            <div className="flex-1">
                <Image
                    className="rounded-tl-[60px] rounded-bl-[60px] object-cover h-screen w-full"
                    src={images.backgroundLogin}
                    alt="Login background"
                />
            </div>
        </div>
    );
}

export default Login;
