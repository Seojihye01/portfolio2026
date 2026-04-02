import React, { useState } from 'react';
import Signup_1 from './Signup_1';
import Signup_2 from './Signup_2';
import Signup_3 from './Signup_3';





const Signup_wrapper =({ onLogin }: { onLogin: () => void }) => {

    const [step, setStep] = useState(1);
    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    return (
        <div className='signup_page_wrapper'>
            {step === 1 && <Signup_1 onNext={nextStep} />}
            {step === 2 && <Signup_2 onNext={nextStep} onPrev={prevStep} />}
            {step === 3 && <Signup_3 onLogin={onLogin} onPrev={prevStep} />}
        </div>
    );
}

export default Signup_wrapper;