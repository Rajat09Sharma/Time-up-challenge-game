import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000 );

    const isTimerStarted=timeRemaining>0 && timeRemaining < targetTime * 1000;

    const timer = useRef();
    const dialog = useRef();

    if(timeRemaining<=0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset(){
        setTimeRemaining(targetTime*1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeReamaining)=>prevTimeReamaining-10)
        },10);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ''}
                </p>
                <button onClick={isTimerStarted ? handleStop : handleStart}>Start challenge</button>
                <p className={isTimerStarted ? "active" : undefined}>
                    {isTimerStarted ? "Timer is running...." : "Timer inactive"}
                </p>
            </section>
        </>
    )
}
