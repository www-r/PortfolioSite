import Image from 'next/image';
import Link from 'next/link';
import Page from '@components/Page';
import Section from '@/components/Section';
import SubTitle from '@/components/SubTitle';
// import Slider from '@/components/Slider';
import FlipCard from '@/components/FlipCard';
import Button from '@/components/Button';
import { Books, Graduation, Cat, Increasing, Tistory, Naver } from '@/assets';
import { URL, SUBTITLE, BUTTON } from '@/constants';

export default async function AboutPage() {
	return (
		<Page className="bg-ivory">
			<Section>
				<SubTitle>{SUBTITLE.about}</SubTitle>
				<div className="inner flex justify-center">
					<div className="flex-cols items-center justify-evenly gap-10 p-8 ">
						<div className="w-full flex justify-between">
							<Image
								className=""
								src="/profile.jpeg"
								alt="Profile Picture"
								width={250}
								height={250}
								style={{ objectFit: 'cover', objectPosition: 'center', borderRadius: '1rem' }}
							/>
							<div className="text-lg">
								<p>안녕하세요</p>
								<p>우리가 중요한 개발자</p>
								<p>김영은입니다. </p>
							</div>
						</div>

						<img src="https://ghchart.rshah.org/www-r" />
						<div className="w-full flex justify-between">
							<Button message={BUTTON.resume} type="resume" href={URL.resume} className="w-[25rem]" />
							<Button message={BUTTON.letter} type="letter" href={URL.letter} className="w-[25rem]" />
						</div>
					</div>
					<div className="grid grid-cols-2 grid-rows-2 gap-y-8 p-8 ">
						<FlipCard img={Increasing}>
							<>
								<h5>Profile</h5>
								<div>
									<p>이름: 김영은</p>
									<p>나이: 만25세</p>
									<p>주소: 서울특별시 용산구 이촌동</p>
									<p>MBTI: INTP , ENTP 그 사이 어딘가</p>
								
								</div>
							</>
						</FlipCard>
						<FlipCard img={Graduation}>
							{
								<>
									<h5>Educations</h5>
									<div className="flex-cols">
										<span>대학교</span>
										<span>2017.3 ~ 2020.9</span>
										<span>일어일문학과 전공</span>
									</div>
									<div>
										<span>패스트캠퍼스 KDT 프론트엔드 중급 4기 </span>
										<span>2022.12 ~ 2023.6</span>
										<p></p>
									</div>
									<div>
										<span>우아한테크코스 6기 프리코스</span>
										<span>2023.10 ~ 2023.11</span>
										<p></p>
									</div>
								</>
							}
						</FlipCard>
						<FlipCard img={Cat}>
							<Image src="/cats.png" alt="Goro & Hoochu" width={250} height={250} style={{ objectFit: 'contain' }} />
						</FlipCard>

						<FlipCard img={Books}>
							<>
								<h5>Study</h5>
								<ul>
									<span>노션</span>

									<li>
										<span>기술블로그</span>
										<Link href={URL.tistory}>
											<Image src={Tistory} alt="Tistory Logo" width={200} height={100} className="bg-white" />
										</Link>
									</li>
									<li>
										<span>개인블로그</span>
										<Link href={URL.naver}>
											<Image src={Naver} alt="Naver Blog Logo" width={200} height={100} />
										</Link>
										<p></p>
									</li>
								</ul>
							</>
						</FlipCard>
					</div>
				</div>
			</Section>
		</Page>
	);
}
