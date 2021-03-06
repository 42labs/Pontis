import React from "react";
import { NextSeo } from "next-seo";
import { DefaultCTASection } from "../components/CTASection";
import SectionContainer from "../components/common/SectionContainer";
import Code from "../components/Code/Code";
import Heading from "../components/Heading";
import ProtocolSection from "../components/Protocol/ProtocolSection";

const ProtocolsPage = () => (
  <>
    <NextSeo title="Protocols" />
    <div className="w-screen">
      <SectionContainer className="bg-slate-50" first>
        <Heading
          title="StarkNet's leading protocols"
          subtitle="Meet our users"
          text="We work closely with teams to ensure they get exactly what they need. Reach out to us if you need a custom solution."
          href="https://docs.empiric.network/using-empiric/consuming-data"
          hrefText="Get verifiable data for your project"
        />
      </SectionContainer>
      <SectionContainer className="sm:!pt-0">
        <ProtocolSection />
      </SectionContainer>
      <SectionContainer className="bg-slate-50">
        <Heading
          title="A few simple lines to integrate"
          subtitle="Try it yourself"
          text="We offer a variety of ways to get high-quality, robust data from the oracle."
          href="https://docs.empiric.network/using-empiric/consuming-data"
          hrefText="Read the documentation"
        />
        <Code />
      </SectionContainer>
      <SectionContainer>
        <DefaultCTASection />
      </SectionContainer>
    </div>
  </>
);

export default ProtocolsPage;
