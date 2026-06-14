"use client";

import React from "react";
import { Column, Flex, Text, Button } from "@/once-ui/components";

interface PortfolioProps {
  structure: {
    title: string;
    display: boolean;
    items: string[];
  }[];
  about: any;
}

const Portfolio: React.FC<PortfolioProps> = ({ structure }) => {
  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Column padding="32">
      <Text variant="heading-strong-l">🚀 Gyanankur's Portfolio</Text>
      
      {structure.filter(section => section.display).map((section: any, index: number) => (
        <Column key={index} gap="16">
          <Flex cursor="interactive" vertical="center" onClick={() => scrollTo(section.title, 80)}>
            <Text variant="heading-default-s">{section.title}</Text>
          </Flex>
          
          {section.items.map((item: string, itemIndex: number) => (
            <Flex key={itemIndex}>
              <Text>{item}</Text>
            </Flex>
          ))}
        </Column>
      ))}

      <Flex horizontal="center" paddingTop="24">
        <Button onClick={() => window.open("https://www.linkedin.com/in/gyanankur-baruah-797205338", "_blank")}>
          Connect on LinkedIn
        </Button>
      </Flex>
    </Column>
  );
};

export default Portfolio;
