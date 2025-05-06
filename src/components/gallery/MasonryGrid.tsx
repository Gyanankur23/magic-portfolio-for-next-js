"use client";

import Masonry from "react-masonry-css";
import { SmartImage, Heading } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { gallery } from "@/app/resources/content";

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    720: 1,
  };

  return (
    <section className={styles.container}>
      <Heading as="h2" variant="heading-strong-l" className={styles.header}>
        🎨 Data Visualizations & Cloud Projects
      </Heading>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {gallery.images.map((image, index) => (
          <SmartImage
            priority={index < 6}
            sizes="(max-width: 560px) 100vw, 50vw"
            key={index}
            radius="m"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
            src={image.src}
            alt={image.alt}
            className={styles.gridItem}
          />
        ))}
      </Masonry>
    </section>
  );
}
