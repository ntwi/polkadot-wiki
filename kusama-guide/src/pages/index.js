const React = require("react");

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

function HomeSplash() {
  const SplashContainer = (props) => (
    <div className="kusamaHomeContainer">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  );

  return (
    <SplashContainer>
      <div className="inner">
        <img
          src={require("@site/static/img/Kusama_header_pink.png").default}
          style={{ width: "100%" }}
        />
      </div>
    </SplashContainer>
  );
}

export default function Index() {
  const { siteConfig } = useDocusaurusContext();

  const { baseUrl } = siteConfig;
  const docsPart = "docs/";
  const docUrl = (doc) => `${baseUrl}${docsPart}${doc}`;
  return (
    <Layout title={siteConfig.tagline}>
      <div>
        <div className="mainpage-row-placeholder" style={{ width: "100%" }} />
        <HomeSplash siteConfig={siteConfig} />
        <div className="mainpage-row-placeholder" />
        <div className="mainContainer" style={{ padding: "0" }}>
          <div className="kusama-mainpage-row-learn">
            <p className="kusama-full-width-main homepage-font">
              Kusama is an early, unaudited and unrefined release of Polkadot.
              Kusama will serve as a proving ground, allowing teams and
              developers to build and deploy a parachain or try out Polkadot’s
              governance, staking, nomination and validation functionality in a
              real environment.
            </p>
          </div>
          <div className="mainpage-row-placeholder" />
          <div className="kusama-mainpage-row">
            <h1 className="kusama-full-width homepage-font">
              What can you do with Kusama?
            </h1>
          </div>
          <div className="kusama-mainpage-row-validator">
            <div className="mainpage-column">
              <h2 className="homepage-font">Become a Validator</h2>
            </div>
            <div className="mainpage-column">
              <p className="homepage-font">
                The minimum requirement for staking as a validator on Kusama is
                much lower than it is expected for Polkadot. There are also
                programs in place such as{" "}
                <a
                  href="https://polkadot.network/join-kusamas-thousand-validators-programme/"
                  target="_blank"
                >
                  Thousand Validators
                </a>{" "}
                to help community validators rise the ranks.
              </p>
              <a href={docUrl("mirror-maintain-guides-how-to-validate-kusama")}>
                <button className="kusama-mainpage-build-btn homepage-font">
                  Read more on Validators
                </button>
              </a>
            </div>
          </div>
          <div className="kusama-mainpage-row-more">
            <div className="mainpage-column">
              <h2 className="homepage-font">Deploy Parachains</h2>
              <p className="homepage-font">
                Kusama will get the functionality required for parachains before
                Polkadot. This includes participating in a parachain slot
                auction and composable applications.
              </p>
              <a href={docUrl("learn/mirror-learn-parachains")}>
                <button className="kusama-mainpage-build-btn homepage-font">
                  Read more on Parachains
                </button>
              </a>
            </div>
            <div className="mainpage-column">
              <h2 className="homepage-font">Explore the politics</h2>
              <p className="homepage-font">
                Campaign as a councillor or vote for new runtime proposals using
                Democracy.
              </p>
              <a href={docUrl("learn/mirror-learn-governance")}>
                <button className="kusama-mainpage-build-btn homepage-font">
                  Read more on Politics
                </button>
              </a>
            </div>
          </div>
          <div className="kusama-mainpage-cyber-row">
            <div className="kusama-mainpage-column">
              <h2 className="homepage-font">Join a cyber secret society</h2>
              <p className="homepage-font">
                The Kappa Sigma Mu fraternity asks you to get a Kusama tattoo to
                join.
              </p>
              <a
                href={docUrl("maintain/kusama/maintain-guides-society-kusama")}
              >
                <button className="kusama-mainpage-build-btn homepage-font">
                  See Kappa Sigma Mu
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
