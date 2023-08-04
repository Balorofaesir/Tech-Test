"use client";
import Image from "next/image";
import "./codigo-vigente.css";
import Orocash from "../../../public/logo_orocash_2021 1.png";

export default function codigoVigente() {
  return (
    <div className='codigoVigente--body'>
      <header className='codigoVigente--header'>
        <Image
          style={{ justifySelf: "center" }}
          className='codigoVigente--oroCassImage'
          src={Orocash}
          alt=''
        />
        <p>Inicio | Código</p>
      </header>
      <main>
        <nav className="condigoVigente--nav">
          <h1>Consulta de codigo</h1>
          <input
            className='main--input--nav'
            type='text'
            placeholder='Ingresa tu código'
          />
          <button>Buscar</button>
        </nav>
        <article className='codigoVigente--section-container'>
          <section className='codigoVigente--section-container__container1'>
            <h1>Información del código</h1>
            <div className='codigoVigente--section-container__divContainer'>
              <div>
                <p>codigo</p>
                <input className='main--input--small' type='text' />
              </div>
              <div>
                <p>estado</p>
                <input className='main--input--small' type='text' />
              </div>
              <div>
                {" "}
                <p>fecha de vencimiento</p>
                <input className='main--input--small' type='text' />
              </div>
              <div>
                <p>porcentaje promocional</p>
                <input className='main--input--small' type='text' />
              </div>
            </div>
          </section>
          <section>
            {" "}
            <div className='codigoVigente--section-container__container2'>
              <h1>Información del cliente</h1>
              <div className='codigoVigente--section-container__divContainer'>
                <div>
                  <p>tipo de identificación</p>
                  <input className='main--input--small' type='text' />
                </div>
                <div>
                  <p>identificación</p>
                  <input className='main--input--small' type='text' />
                </div>
              </div>
              <div>
                <p>nombre completo</p>
                <input className='main--input--big' type='text' />
              </div>
            </div>
            <div className='codigoVigente--section-container__container3'>
              <h1>Información de tienda</h1>
              <div>
                <p>Tienda inicial</p>
                <input className='main--input--small' type='text' />
              </div>
            </div>
          </section>
          <section className='codigoVigente--section-container__container4'>
            <h1>Información del producto</h1>
            <div>
              <p>Descripción</p>
              <input className='main--input--big' type='text' />
            </div>
            <div className='codigoVigente--section-container__divContainer'>
              <div>
                <p>Estado</p>
                <input className='main--input--small' type='text' />
              </div>
              <div>
                <p>Quilates</p>
                <input className='main--input--small' type='text' />
              </div>
            </div>
            <div className='codigoVigente--section-container__divContainer'>
              <div>
                <p>Gramos</p>
                <input className='main--input--small' type='text' />
              </div>
              <div>
                <p>Total</p>
                <input className='main--input--small' type='text' />
              </div>
            </div>
          </section>
          <button className='Container--left-button'>Contratar</button>
        </article>
      </main>
    </div>
  );
}
