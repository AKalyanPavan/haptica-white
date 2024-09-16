import React from 'react';
import mainImage from './../images/main-image.png';
import productDevelopment from './../images/product-development.png';
import marketingMastery from './../images/marketing-mastery.png';
import dataDrivenDecisions from './../images/data-driven-decisions.png';
import recentWork1 from './../images/recent-work-1.png';
import recentWork2 from './../images/recent-work-2.png';
import recentWork3 from './../images/recent-work-3.png';

function Homepage() {

	const mainImageStyle = {
		backgroundImage: `url(${mainImage})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100vh",
		borderRadius: "32px",
		backgroundPosition: "center"
	};

	return (
		<>
			<section className="bg-[#ffffff] md:h-[1165px] h-[1000px] pt-[40px] rounded-b-[40px] font-['Lexend_Deca']">
				<div className="md:px-[40px] px-[20px]">
					<div className="max-w-[1440px] mx-auto">
						<header>
							<div className="flex items-center justify-between">
								<div className="flex w-fit items-center cursor-pointer">
									<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path stroke-width="1" d="M20.1 10C20.1 6.19952 18.1185 2.8671 15.1467 1.02373C16.1028 0.684404 17.13 0.499999 18.2 0.499999C23.3268 0.499999 27.5 4.74372 27.5 10C27.5 15.2563 23.3268 19.5 18.2 19.5C17.13 19.5 16.1028 19.3156 15.1467 18.9763C18.1185 17.1329 20.1 13.8005 20.1 10ZM7.9 10C7.9 13.8005 9.88147 17.1329 12.8534 18.9763C11.8973 19.3156 10.87 19.5 9.8 19.5C4.67323 19.5 0.5 15.2563 0.5 10C0.499999 4.74372 4.67323 0.5 9.8 0.5C10.87 0.5 11.8972 0.684404 12.8533 1.02373C9.88147 2.8671 7.9 6.19952 7.9 10Z" stroke="#0E071E"/>
									</svg>
									<span className="font-['Lexend_Zetta'] font-semibold text-[24px] ml-[5px] tracking-[-4px]">Haptica</span>
								</div>
								<div className="font-['Lexend'] font-normal text-[14px] tracking-[3px] min-[900px]:block hidden">
									<span className="cursor-pointer hover:underline underline-offset-[5px] decoration-[2px]">WHAT WE DO</span>
									<span className="xl:mx-[100px] cursor-pointer mx-[50px] cursor-pointer hover:underline underline-offset-[5px] decoration-[2px]">OUR WORK</span>
									<span className="cursor-pointer hover:underline underline-offset-[5px] decoration-[2px]">WHY US?</span>
								</div>
								<div className="font-['Lexend'] font-normal text-[14px] tracking-[3px] flex items-center mr-[10px]">
									<div className="gradientbackground sm:flex items-center hidden cursor-pointer border-b-solid hover:border-b-black border-b-[2px] border-b-[#ffffff]">
										<span className="mr-[5px]">CONTACT US</span>
										<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1 9L9 1" stroke="#a53856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
											<path d="M1 1H9V9" stroke="#a53856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</div>
									<div className="min-[900px]:hidden border-[2px] border-solid p-[0.5px] rounded-[5px] border-black ml-[20px]">
										<svg className="" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g id="SVGRepo_bgCarrier" stroke-width="0"/>
											<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
											<g id="SVGRepo_iconCarrier"> <path d="M5 12H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> <path d="M5 17H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> <path d="M5 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> </g>
										</svg>
									</div>
								</div>
							</div>
						</header>
						<div className="mt-[120px] text-left font-light xl:text-[80px] lg:text-[70px] md:text-[50px] sm:text-[40px] text-[30px] lg:leading-[110px] md:leading-[80px] leading-[50px]">
							<span>We bridge the gap between</span>
							<br />
							<span>vision and reality</span>
						</div>
						<div className="flex">
							<div className="circularGradient sm:block hidden ml-[40px] z-[0] w-[678px] h-[484px] rounded-[50%] circularGradient">
							</div>
							<div className="min-w-fit text-left min-[700px]:ml-auto w-fit leading-[28px] text-[18px] min-[600px]:mt-[200px] mt-[100px] lg:mr-[150px] mr-[50px] max-[699px]:mr-auto">
								<span>Full-Stack Development & Marketing</span>
								<br />
								<span>Solutions for Growth-Driven</span>
								<br />
								<span>Businesses</span>
							</div>
						</div>
						<div className="mt-[50px]" style={mainImageStyle}>
							<div className="flex flex-col justify-end pb-[40px] sm:pl-[40px] pl-[20px] h-[100%] text-white text-left font-light xl:text-[32px] min-[1100px]:text-[28px] md:text-[24px] text-[20px] min-[1100px]:leading-[55px] leading-[50px]">
								<div>
									<span>Feeling overwhelmed by the product development process?</span>
									<br />
									<span>Struggling to translate your brilliant idea into a market-ready solution?</span>
								</div>
							</div>
						</div>
					</div>
					<div className="max-w-[1440px] mx-auto">
						<div className="xl:text-[32px] min-[1100px]:text-[28px] md:text-[24px] text-[20px] sm:ml-[40px] ml-[20px] max-w-[1081px] text-left my-[230px] font-light">
							At Haptico, we're your one-stop shop for crafting exceptional digital products and propelling them to success. We're a passionate team of <span className="font-medium">developers, designers, and marketing experts</span> who believe in the power of collaboration. We partner with businesses like yours to bring your vision to life, from the initial concept to launch and beyond.
						</div>
					</div>
					<div className="max-w-[1440px] mx-auto lg:text-[64px] sm:text-[48px] text-[25px] font-light text-right">Here's how we can help</div>
					<div className="max-w-[1440px] mx-auto mt-[120px] grid min-[1400px]:grid-cols-6 min-[800px]:grid-cols-4 grid-cols-2 gap-[25px] text-left font-normal">
						<div className="col-span-2 border-[#0e071d] border-solid border-[1px] rounded-[32px] p-[40px]">
							<div className="flex justify-between">
								<span className="font-['Lexend'] sm:text-[40px] text-[30px]">
									Product <br />Development
								</span>
								<svg className="min-w-[10px]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 9L9 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M1 1H9V9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
							<img className="py-[25px] rounded-[16px] w-full" src={productDevelopment} />
							<span className="text-[#7D7C86] text-[18px] leading-[28px]">Our skilled developers build robust front-end and back-end solutions tailored to your specific needs.</span>
	 					</div>
	 					<div className="col-span-2 border-[#EEEFF1] border-solid border-[1px] rounded-[32px] p-[40px]">
							<div className="flex justify-between">
								<span className="font-['Lexend'] sm:text-[40px] text-[30px]">
									Marketing <br />Mastery
								</span>
								<svg className="min-w-[10px]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 9L9 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M1 1H9V9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
							<img className="py-[25px] rounded-[16px] w-full" src={marketingMastery} />
							<span className="text-[#7D7C86] text-[18px] leading-[28px]">We leverage SEO, SEM, and SMM strategies to ensure your product reaches the right audience.</span>
	 					</div>
	 					<div className="col-span-2 max-[1400px]:col-start-2 max-[799px]:col-start-1 border-[#EEEFF1] border-solid border-[1px] rounded-[32px] p-[40px]">
							<div className="flex justify-between">
								<span className="font-['Lexend'] sm:text-[40px] text-[30px]">
									Data-Driven <br />Decisions
								</span>
								<svg className="min-w-[10px]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 9L9 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M1 1H9V9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
							<img className="py-[25px] rounded-[16px] w-full" src={dataDrivenDecisions} />
							<span className="text-[#7D7C86] text-[18px] leading-[28px]">We utilize data insights to optimize your product and marketing strategies for maximum impact.</span>
	 					</div>
					</div>
					<div className="max-w-[1440px] mx-auto lg:text-[64px] sm:text-[48px] text-[25px] font-light text-left my-[150px]">Recent Work</div>
					<div className="font-['Lexend'] max-w-[1440px]">
						<div className="flex">
							<div>
								<img className="" src={recentWork1} />
							</div>
							<div className="pl-[30px] w-[25%]">
								<div className="flex justify-between">
									<span className="text-[40px] font-normal">HIP HIP</span>
									<svg className="min-w-[10px] mt-[15px]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 9L9 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M1 1H9V9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
								<div className="text-[18px] text-[#7D7C86] mt-[30px] text-left leading-[28px] w-[85%]">
									A coffee brand’s complete branding and helped them to 3x their growth rate
								</div>
							</div>
						</div>
						<div className="flex my-[75px]">
							<div>
								<img className="" src={recentWork2} />
							</div>
							<div className="pl-[30px] w-[25%]">
								<div className="flex justify-between">
									<span className="text-[40px] font-normal">HIP HIP</span>
									<svg className="min-w-[10px] mt-[15px]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 9L9 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M1 1H9V9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
								<div className="text-[18px] text-[#7D7C86] mt-[30px] text-left leading-[28px] w-[85%]">
									A coffee brand’s complete branding and helped them to 3x their growth rate
								</div>
							</div>
						</div>
						<div className="flex">
							<div>
								<img className="" src={recentWork3} />
							</div>
							<div className="pl-[30px] w-[25%]">
								<div className="flex justify-between">
									<span className="text-[40px] font-normal">HIP HIP</span>
									<svg className="min-w-[10px] mt-[15px]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 9L9 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M1 1H9V9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
								<div className="text-[18px] text-[#7D7C86] mt-[30px] text-left leading-[28px] w-[85%]">
									A coffee brand’s complete branding and helped them to 3x their growth rate
								</div>
							</div>
						</div>
					</div>
					<div className="max-w-[1440px] mx-auto lg:text-[64px] sm:text-[48px] text-[25px] font-light text-right my-[150px]">Benefits of Working with Us</div>
				</div>
				<div className="grid min-[1400px]:grid-cols-4 min-[700px]:grid-cols-2 grid-cols-1 font-normal font-['Lexend'] text-left ">
					<div className="pl-[40px] pr-[25px] py-[40px] border-[#EEEFF1] border-solid border-[1px]">
						<div className="text-[24px] mb-[150px]">Seamless Collaboration</div>
						<div className="text-[#7D7C86] text-[18px] leading-[28px] sm:min-w-[282px]">We work closely with you to understand your vision and goals.</div>
					</div>
					<div className="pl-[40px] pr-[25px] py-[40px] border-[#EEEFF1] border-solid border-[1px]">
						<div className="text-[24px] mb-[150px]">Faster Time to Market</div>
						<div className="text-[#7D7C86] text-[18px] leading-[28px] sm:min-w-[282px]">Our streamlined approach helps you launch your product efficiently.</div>
					</div>
					<div className="pl-[40px] pr-[25px] py-[40px] border-[#EEEFF1] border-solid border-[1px]">
						<div className="text-[24px] mb-[150px]">Scalable Solutions</div>
						<div className="text-[#7D7C86] text-[18px] leading-[28px] sm:min-w-[282px]">We build products that can grow alongside your business.</div>
					</div>
					<div className="pl-[40px] pr-[25px] py-[40px] border-[#EEEFF1] border-solid border-[1px]">
						<div className="text-[24px] mb-[150px]">Measurable Results</div>
						<div className="text-[#7D7C86] text-[18px] leading-[28px] sm:min-w-[282px]">We track key metrics to demonstrate the success of your product and marketing efforts.</div>
					</div>
				</div>
				<div className="sm:pl-[40px] pl-[20px] mt-[130px] mb-[275px] text-left lg:text-[64px] sm:text-[48px] text-[25px] font-['Lexend_Deca'] font-light lg:leading-[80px] sm:leading-[60px] leading-[40px] max-w-[945px]">
					Ready to stop chasing trends and <span className="gradientbackground">start creating</span> something truly remarkable?
				</div>
				<div className="sm:pl-[40px] pl-[20px] mt-[275px] flex sm:flex-row flex-col gap-[30px] items-center">
					<div className="cursor-pointer font-normal text-[16px] font-['Lexend_Deca'] text-white bg-[#000000] rounded-[28px] px-[24px] py-[16px] w-fit">Get a Free Consultation</div>
					<div className="gradientbackground flex items-center text-[14px] cursor-pointer">
						Learn More About Our Services
						<svg className="ml-[10px]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 9L9 1" stroke="#a53856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M1 1H9V9" stroke="#a53856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</div>
				<div classNam="relative">
					<div className="footer absolute w-[100%] h-[25%] mb-[-10px] z-[-1]">
					</div>
					<div className="border-t-[1px] border-t-solid border-t-[#b9b9b9] sm:px-[40px] px-[20px] mt-[100px] pt-[60px] pb-[150px] flex lg:flex-row flex-col justify-between items-start gap-[40px] bg-transperent">
						<div className="flex w-fit items-center cursor-pointer max-lg:mx-auto">
							<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path stroke-width="1" d="M20.1 10C20.1 6.19952 18.1185 2.8671 15.1467 1.02373C16.1028 0.684404 17.13 0.499999 18.2 0.499999C23.3268 0.499999 27.5 4.74372 27.5 10C27.5 15.2563 23.3268 19.5 18.2 19.5C17.13 19.5 16.1028 19.3156 15.1467 18.9763C18.1185 17.1329 20.1 13.8005 20.1 10ZM7.9 10C7.9 13.8005 9.88147 17.1329 12.8534 18.9763C11.8973 19.3156 10.87 19.5 9.8 19.5C4.67323 19.5 0.5 15.2563 0.5 10C0.499999 4.74372 4.67323 0.5 9.8 0.5C10.87 0.5 11.8972 0.684404 12.8533 1.02373C9.88147 2.8671 7.9 6.19952 7.9 10Z" stroke="#0E071E"/>
							</svg>
							<span className="font-['Lexend_Zetta'] font-semibold text-[24px] ml-[5px] tracking-[-4px]">Haptica</span>
						</div>
						<div className="grid sm:grid-cols-3 grid-cols-2 gap-x-[50px] gap-y-[20px] tracking-[3px] text-[10px] text-left pt-[10px] mx-auto">
							<span className="cursor-pointer">WHAT WE DO</span>
							<span className="cursor-pointer">OUR WORK</span>
							<span className="cursor-pointer">WHY US?</span>
							<span className="cursor-pointer">BLOG</span>
							<span className="cursor-pointer">CUSTOMER STORIES</span>
							<span className="cursor-pointer">IN NEWS</span>
						</div>
						{/*<div className="xl:flex hidden w-fit items-center cursor-pointer invisible">
							<svg width="28" height="20" viewBox="0 0 28 20" fill="#d9f99d" xmlns="http://www.w3.org/2000/svg">
								<path stroke-width="1" d="M20.1 10C20.1 6.19952 18.1185 2.8671 15.1467 1.02373C16.1028 0.684404 17.13 0.499999 18.2 0.499999C23.3268 0.499999 27.5 4.74372 27.5 10C27.5 15.2563 23.3268 19.5 18.2 19.5C17.13 19.5 16.1028 19.3156 15.1467 18.9763C18.1185 17.1329 20.1 13.8005 20.1 10ZM7.9 10C7.9 13.8005 9.88147 17.1329 12.8534 18.9763C11.8973 19.3156 10.87 19.5 9.8 19.5C4.67323 19.5 0.5 15.2563 0.5 10C0.499999 4.74372 4.67323 0.5 9.8 0.5C10.87 0.5 11.8972 0.684404 12.8533 1.02373C9.88147 2.8671 7.9 6.19952 7.9 10Z" stroke="#d9f99d"/>
							</svg>
							<span className="font-['Lexend_Zetta'] font-semibold text-[24px] ml-[5px] tracking-[-4px]">Haptica</span>
						</div>*/}
					</div>
				</div>
			</section>
		</>
	)
}

export default Homepage;

