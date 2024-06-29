import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import VideoItem from "./VideoItem";
import ActionButtons from "../Content_/ActionButtons";

const VideoFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;

// Local video file paths and their corresponding image paths
const videos = [
  {
    videoSrc: 'src/Components/Content_/tiktok_videos/video1.mp4',
    images: [
      'src/Components/Content_/images/image1_1.jpg',
      'src/Components/Content_/images/image1_2.jpg',
      'src/Components/Content_/images/image1_3.jpg',
      'src/Components/Content_/images/image1_4.jpg',
      'src/Components/Content_/images/image1_5.jpg',
    ],
  },
  {
    videoSrc: 'src/Components/Content_/tiktok_videos/video2.mp4',
    images: [
      'src/Components/Content_/images/image2_1.jpg',
      'src/Components/Content_/images/image2_2.jpg',
      'src/Components/Content_/images/image2_3.jpg',
      'src/Components/Content_/images/image2_4.jpg',
      'src/Components/Content_/images/image2_5.jpg',
    ],
  },
  {
    videoSrc: 'src/Components/Content_/tiktok_videos/video3.mp4',
    images: [
      'src/Components/Content_/images/image3_1.jpg',
      'src/Components/Content_/images/image3_2.jpg',
      'src/Components/Content_/images/image3_3.jpg',
      'src/Components/Content_/images/image3_4.jpg',
      'src/Components/Content_/images/image3_5.jpg',
    ],
  },
  {
    videoSrc: 'src/Components/Content_/tiktok_videos/video4.mp4',
    images: [
      'src/Components/Content_/images/image4_1.jpg',
      'src/Components/Content_/images/image4_2.jpg',
      'src/Components/Content_/images/image4_3.jpg',
      'src/Components/Content_/images/image4_4.jpg',
      'src/Components/Content_/images/image4_5.jpg',
    ],
  },
  {
    videoSrc: 'src/Components/Content_/tiktok_videos/video5.mp4',
    images: [
      'src/Components/Content_/images/image5_1.jpg',
      'src/Components/Content_/images/image5_2.jpg',
      'src/Components/Content_/images/image5_3.jpg',
      'src/Components/Content_/images/image5_4.jpg',
      'src/Components/Content_/images/image5_5.jpg',
    ],
  },
];

/**
 * VideoFeed component that renders a list of VideoItem components,
 * each containing a video player.
 */
const VideoFeed = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const videoRefs = useRef([]);

  const handleScroll = () => {
    const index = videoRefs.current.findIndex((videoRef) => {
      const rect = videoRef.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });

    if (index !== -1 && index !== visibleIndex) {
      setVisibleIndex(index);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleIndex]);

  return (
    <div>
      {videos.map((src, index) => (
        // Render a VideoItem component for each video URL.
        // Pass the URL as a prop to the VideoItem component.
        <VideoItem key={index} src={src} />
      ))}
    </div>
  );
};

/**
 * VideoItem component that renders a video player with a given source URL.
 */
const VideoItem = ({ src }) => {
  // Get the reference to the video player element and the visibility state
  // using the useInView hook from the react-intersection-observer library.
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

  // Render the video player with the provided source URL and visibility state.
  return (
    <div
      ref={ref} // Set the reference to the video player element.
      style={{ height: "100vh", marginBottom: "10px" }}
    >
      {/* Render the VideoPlayer component with the source URL and visibility state. */}
      <VideoPlayer src={src} isVisible={inView} />
    </div>
  );
};

const styles = {
  overlay: {
    position: 'absolute',
    bottom: '65px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%', // change box sizes
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0 1vw',
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '95%',
  },
  box: {
    background: 'white',
    padding: '1px',
    borderRadius: '5px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '18%', // Ensure the boxes are square
    aspectRatio: '1',
    margin: '0 4px',
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '5px',
  },
};

export default VideoFeed;
