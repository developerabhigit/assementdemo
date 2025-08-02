import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import WebDesigner from "./components/WebDesigner";
import FilterBox from "./components/FilterBox";
import ServiceList from "./components/ServiceList";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Top Web Designers in India | ZuzuCode</title>
        <meta
          name="description"
          content="Find top-rated web designers in India on ZuzuCode. Filter by category, location, and reviews."
        />
        <meta
          name="keywords"
          content="Web Designers, India, Freelancers, UI UX, Frontend Developer, ZuzuCode"
        />
        <link rel="canonical" href="https://zuzucode.com" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for social sharing */}
        <meta
          property="og:title"
          content="Top Web Designers in India | ZuzuCode"
        />
        <meta
          property="og:description"
          content="Browse curated web designers in India with filters and real user reviews."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zuzucode.com" />
        <meta property="og:image" content="https://zuzucode.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Web Designers in India | ZuzuCode"
        />
        <meta
          name="twitter:description"
          content="Discover India’s top web designers. Hire the best today."
        />
        <meta
          name="twitter:image"
          content="https://zuzucode.com/twitter-image.jpg"
        />
      </Helmet>

      <main className="min-h-screen bg-white">
        <Header />
        <WebDesigner />
        <FilterBox />
        <ServiceList />
      </main>
    </>
  );
};

export default App;
