import RotatingText from '@/components/RotatingText';

export default function Home() {
  return (
    <div className="font-bold text-2xl">
      <span className="block pb-2">👋 Hi, I&apos;m Darius Kletter, a</span>
      <RotatingText
        texts={[
          'follower of Jesus',
          'husband',
          'frontend developer',
          'guitarist',
        ]}
        mainClassName="px-2 sm:px-2 md:px-3 bg-yellow-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-start rounded-lg"
        staggerFrom={'last'}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-120%' }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </div>
  );
}
