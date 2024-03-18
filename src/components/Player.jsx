import { useRef, useState } from 'react'

export default function Player() {
    const playerName=useRef();
    const [nameOfPalyer,setPlayerName]=useState("");
    function handelClick(){
        // setNameClickBtn(true);
        setPlayerName(playerName.current.value);
        playerName.current.value="";
    }
  return (
    <section id="player">
    <h2>Wlecome {nameOfPalyer?nameOfPalyer:"unkonwn entity"}</h2>
    <p>
        <input ref={playerName} type="text" />
        <button type="submit" onClick={handelClick}>Set Name</button>
    </p>
    </section>
  )
}
