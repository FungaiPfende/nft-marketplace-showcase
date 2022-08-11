import { Download, Features, SectionWrapper } from "./components";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        React Native NFT Marketplace Showcase.
      </h1>
      <Download />
      <Features />
      <SectionWrapper />
    </div>
  );
};

export default App;
