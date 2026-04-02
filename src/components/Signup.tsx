import Signup_wrapper from "./Signup_wrapper";
import "./Signup.css";

function Signup({ onLogin }: { onLogin: () => void }){
    return(
        <>
        <Signup_wrapper onLogin={onLogin} />
        </>
    );
}

export default Signup;