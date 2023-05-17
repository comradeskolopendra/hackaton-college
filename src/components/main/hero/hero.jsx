import Container from '../../container/container';

const Hero = () => {
	return (
		<div className='mt-40'>
			<Container className='max-lg:pb-40 flex justify-around max-lg:justify-start items-stretch'>
				<div>
					<h1 className='text-5xl max-md:text-4xl max-sm:text-3xl font-bold text-primary'>
						Программируй красиво,
						<br /> поступай в Политех!
					</h1>
					<p className='mt-4 font-medium text-xl text-primary'>Accessible education for all.</p>

					<div className='mt-8 flex justify-start gap-6 max-sm:flex-wrap'>
						<div className='text-primary text-center max-sm:text-start'>
							<h3 className='text-2xl font-bold'>100K+</h3>
							<p className='text-lg font-medium'>Студентов</p>
						</div>

						<div className='text-primary text-center max-sm:text-start'>
							<h3 className='text-2xl font-bold'>1K+</h3>
							<p className='text-lg font-medium'>Возможностей</p>
						</div>

						<div className='text-primary text-center max-sm:text-start'>
							<h3 className='text-2xl font-bold'>100+</h3>
							<p className='text-lg font-medium'>Преподавателей</p>
						</div>
					</div>
				</div>

				<div className='flex flex-col justify-end relative max-lg:hidden'>
					<img className='z-[2] min-h-[500px] w-auto object-contain object-bottom' src='/student.png' alt='student' />
					<img className='z-[1] absolute top-0 left-0 w-full h-auto' src='/student-bg.svg' alt='' />
				</div>
			</Container>
		</div>
	);
};

export default Hero;
