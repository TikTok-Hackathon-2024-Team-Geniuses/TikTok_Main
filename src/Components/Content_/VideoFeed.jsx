import VideoPlayer from "./VideoPlayer";
import { useInView } from "react-intersection-observer";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://archive.org/download/Sintel/sintel-2048-surround.mp4",
  "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
];

/**
 * VideoFeed component that renders a list of VideoItem components,
 * each containing a video player.
 */
const VideoFeed = () => {
  // Iterate over the array of video URLs and render a VideoItem component
  // for each one, passing the URL as a prop.
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

export default VideoFeed;
