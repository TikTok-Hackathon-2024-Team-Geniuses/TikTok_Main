import VideoPlayer from "./VideoPlayer";
import { useInView } from "react-intersection-observer";

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
  return (
    <div>
      {videos.map((video, index) => (
        <VideoItem key={index} videoSrc={video.videoSrc} images={video.images} />
      ))}
    </div>
  );
};

/**
 * VideoItem component that renders a video player with a given source URL.
 */
const VideoItem = ({ videoSrc, images }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

  return (
    <div
      ref={ref}
      style={{ position: 'relative', height: '100vh', marginBottom: '10px' }}
    >
      <VideoPlayer src={videoSrc} isVisible={inView} />
      <div style={styles.overlay}>
        <div style={styles.boxContainer}>
          {images.map((imgSrc, index) => (
            <div key={index} style={styles.box}>
              <img src={imgSrc} alt={`Box ${index + 1}`} style={styles.image} />
            </div>
          ))}
        </div>
      </div>
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
