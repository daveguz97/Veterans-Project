import Navbar from '@/app/navbar/navbar';
import { Lato } from 'next/font/google';

const lato = Lato({
	weight: ['400'],
	subsets: ['latin']
})
export default function Home() {
	return (
		<main className={lato.className}>
			<Navbar />
		</main>
	);
}
