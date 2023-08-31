import HomeComp from '@/components/Home/Home';
import Link from 'next/link';
import { BsInfoCircle } from 'react-icons/bs';

export default function Home() {
  return (
    <>
      <HomeComp />
      <Link href="/static">
        <button className="fixed top-28 right-4 md:right-8 h-8 w-8 hover:scale-105 transition-transform">
          <BsInfoCircle className="h-full w-full" />
        </button>
      </Link>
    </>
  );
}
