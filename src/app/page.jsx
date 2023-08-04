"use client";
import Image from "next/image";
import handsImage from "../../public/image 1.png";
import "./home.css";

export default function Home() {
  return (
    <main className='home--main'>
      <section className="home--login-Container">
        <h1 className='home--tittle'>Vende tu joya</h1>
        <div className='home--container1'>
          <div>
            <p>Usuario</p>
            <input type='email' />
          </div>
          <div>
            <p>Contraseña</p>
            <input type='password' />
          </div>{" "}
          <button>ingresar</button>
        </div>
      </section>
      <Image className='home--image' src={handsImage} alt='Hands Image' />
    </main>
  );
}
