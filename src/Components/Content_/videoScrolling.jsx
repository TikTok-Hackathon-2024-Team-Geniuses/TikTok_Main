
import VideoPlayer from "./Components/VideoPlayer";
import VideoFeed from "./VideoFeed";
import { useInView } from "react-intersection-observer";

const VideoFeed = () => {
  return (
    <div>
      {videos.map((src, index) => (
        <VideoItem key={index} src={src} />
      ))}
    </div>
  );
};

/**
 * VideoItem component that renders a video player with a given source URL.
 * Uses the useInView hook from the react-intersection-observer library to
 * determine when the video becomes visible in the viewport.
 */
const VideoItem = ({ src }) => {
  // Get the reference to the video player element and the visibility state
  const { ref, inView } = useInView({
    threshold: 0.2, // The video is considered in view if 20% of it is visible
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
