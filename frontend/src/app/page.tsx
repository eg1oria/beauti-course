import Header from '@/components/Header/Header';
import './globals.scss';
import Intro from '@/components/Intro/Intro';
import Mastering from '@/components/Mastering/Mastering';

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Mastering />
    </>
  );
}
