// import { Link } from 'react-router-dom';
// import FluidSimulation from '../components/FluidSimulation';
// import Button from '../components/reusable/Button';
// import TitleCanvas from '../components/TitleCanvas';
import '../css/Title.css'
// import Title from '../components/Title';
import Backbanner from "../images/banner1.png"
import CanvasAnimation from '../components/CanvasAnimation';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {

	const titleRef = useRef(null); // Create a ref for the title

	useEffect(() => {
		// Animate the glow effect on the title
		const timeline = gsap.timeline();
		timeline.to(titleRef.current, {
			textShadow: '0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 0.5)',
			duration: 1,
			repeat: -1, // Repeat the animation indefinitely
			yoyo: true, // Make the animation go back and forth
		});
	}, []);
	return (
		<div className=' relative text-center -mt-52 items-center '

			style={{
				backgroundImage: `url(${Backbanner})`,
				backgroundRepeat: "no-repeat",
				backgroundPositionX: "center",
				backgroundSize: "cover",
				backgroundPosition: "top",
				marginTop: "0px",
				paddingTop: "200px",
				paddingBottom: "200px",

			}}
		>
			{/* <h1  aria-label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alondra Espacial & Amanda B2" className="title-animation text-center z-30">10 AÑOS EN EL CAMPO – EL PODER QUE NADIE MÁS TIENE</h1> */}

			
			{/* <FluidSimulation /> */}
			<CanvasAnimation/>
			<div className='title'>
				<h1 className='font-extrabold text-8xl -mt-14'><span className='background1'>Bienvenido al Templo de Charlitron<br></br></span>
				Alondra Espacial & Amanda B2
				</h1>
				{/* <h2 className='text-4xl -top-9'>10 AÑOS EN EL CAMPO – EL PODER QUE NADIE MÁS TIENE</h2> */}
			</div>
			<div>
				<h5 className=' absolute bottom-0 text-2xl text-white z-30'>
				Charlitron: Donde la Inteligencia se convierte en Realidad
				</h5>
			</div>
			{/* <div className=' absolute top-0'>
			<Title/>

			</div> */}
			<div className=" "

			>
				{/* <h1 className='-mt-16 text-center font-bold   text-white pt-16' style={{ fontSize: '90px' }}>
					CHARLITRON
				</h1> */}
				{/* <section>
  <div class="wave">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="content">
    <h2>Wavy Animation</h2>
  </div>
</section> */}




				{/* <CanvasAnimation/> */}
				{/* <AppBanner></AppBanner> */}
				{/* <div id='container' className='flex flex-col items-center justify-center '>
					<div className='text-center  '> */}


				<div>

					{/* <p className='a-second-title '>
						Durante una década, Charlitron ha caminado al lado de las marcas más poderosas del país. No solo <br></br> hemos trabajado para ellas… hemos vivido con ellas.<br></br>

						Sabemos lo que funciona en una sala de juntas.<br></br>
						Y lo que realmente funciona… en la calle.<br></br>

						Hemos observado a clientes reales tomar decisiones frente a un volante.<br></br>
						Hemos sentido sus emociones frente a un perifoneo bien ejecutado.<br></br>
						Hemos visto campañas triunfar… y otras fallar por no entender el campo.<br></br>

						Esa experiencia no está en un libro.<br></br>
						No se aprende en una universidad.<br></br>
						Y no la tiene ninguna otra agencia que viva solo en una pantalla.<br></br>

						10 años. Decenas de marcas. Miles de personas.<br></br>
						Y un solo resultado: conocimiento real del comportamiento de consumo en el momento de verdad.<br></br>

						Por eso, cuando activas el sistema A&A&A, no solo obtienes estrategia digital o diseño emocional.<br></br>
						Obtienes el único equipo que ha fusionado:<br></br>

						🧠 Inteligencia viva (Amanda)<br></br>
						🎨 Estrategia simbólica (Alondra)<br></br>
						👣 Experiencia de campo real (Charlitron)<br></br>
					</p> */}
				</div>

				{/* </div> */}

			</div>
		</div>


		// </div>
		// </div>
	);
};

export default Home;
