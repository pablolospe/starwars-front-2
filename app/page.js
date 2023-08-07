import HomeComp from '@/components/Home/Home';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HomeComp />
      <Link href="/static">
        <button className="absolute top-32 right-4 md:right-8 border h-6 w-6 rounded-full text-xs bg-gray-900 hover:bg-gray-950">
          i
        </button>
      </Link>
    </>
  );
}
