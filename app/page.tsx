import Navbar from '@/app/navbar/navbar';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	weight: ['400', '600'],
	subsets: ['latin'],
});
export default function Home() {
	return (
		<>
			<main>
				<Navbar />
			</main>
		</>
	);
}
