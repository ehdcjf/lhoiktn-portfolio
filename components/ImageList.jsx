import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";

const imageList = (props) => {
  const images = props.images;
  return (
    <ImageList
      sx={{
        width: "100%",
        height: 500,

        transform: "translateZ(0)",
      }}
      rowHeight={200}
      gap={1}
    >
      {images.map((item) => {
        return (
          <ImageListItem
            sx={{
              marginY: "3vh",
            }}
            key={item.label}
            cols={2}
            rows={2}
          >
            <Image
              src={item.imgPath}
              width={800}
              height={600}
              alt={item.label}
              loading="lazy"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default imageList;
