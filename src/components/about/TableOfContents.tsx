"use client";

import React from "react";
import { Column, Flex, Text, Button } from "@/once-ui/components";
import styles from "./portfolio.module.scss";

interface PortfolioProps {
  sections: {
    title: string;
    display: boolean;
    items: string[];
  }[];
}

const Portfolio: React.FC<PortfolioProps> = ({ sections }) => {
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
    <Column padding="32" className={styles.container}>
      <Text size="large" weight="bold">🚀 Gyanankur’s Portfolio</Text>
      
      {sections.filter(section => section.display).map((section, index) => (
        <Column key={index} gap="16">
          <Flex cursor="interactive" className={styles.hover} vertical="center" onClick={() => scrollTo(section.title, 80)}>
            <Text size="medium" weight="semi-bold">{section.title}</Text>
          </Flex>
          
          {section.items.map((item, itemIndex) => (
            <Flex key={itemIndex} className={styles.item}>
              <Text>{item}</Text>
            </Flex>
          ))}
        </Column>
      ))}

      <Flex justify="center" paddingTop="24">
        <Button onClick={() => window.open("https://www.linkedin.com/in/gyanankur", "_blank")}>
          Connect on LinkedIn
        </Button>
      </Flex>
    </Column>
  );
};

export default Portfolio;
