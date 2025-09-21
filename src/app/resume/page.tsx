"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";
import { Badge } from "@/components/Badge";
// import { saveAs } from "file-saver";

export default function Home() {
  const loadResume = () => {
    // path to the actual pdf you want to save in the local machine
    const pdfUrl = "/resume/mohamed_jarboua_DevOps_resume.pdf";
    // creates an element in the dom so that it can click it and remove it after it
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "m.Jarboua.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <div className="pb-32">
        <Container>
          <span className="text-4xl">💼</span>
          <Heading className="font-black">Work History</Heading>
          <Paragraph className="max-w-xl mt-4">
            I&apos;m a Software Engineer that loves{" "}
            <Highlight>building products</Highlight> and web apps that can impact
            millions of lives
          </Paragraph>
          <WorkHistory />
        </Container>
      </div>
      <div
        className="fixed bottom-3 right-14 sm:bottom-10 md:right-10 z-[100]"
        onClick={() => {
          console.log("download resumer");
          loadResume();
        }}
      >
        <Badge href="#" text="download Resume" />
      </div>
    </div>
  );
}
