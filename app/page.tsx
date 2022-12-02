import { Header, List } from './sections';

const Page = () => {
  return (
    <>
      <Header />
      {/* @ts-expect-error Server Component */}
      <List />
    </>
  );
};

export default Page;
