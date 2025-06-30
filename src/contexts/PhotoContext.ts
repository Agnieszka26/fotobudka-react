import { createContext, RefObject } from "react";
import Webcam from "react-webcam";
import { StepType } from "../types";

export type PhotoContextType = {
  /**
   * Reference to the webcam component for capturing images
   */
  webcamRef: RefObject<Webcam | null>;

  /**
   * Reference to the canvas element used for drawing or merging images
   */
  canvasRef: RefObject<HTMLCanvasElement | null>;

  /**
   * The currently captured image with filters/stickers applied (Base64 string or null)
   */
  capturedImage: string | null;

  /**
   * Function to update the captured image state
   */
  setCapturedImage: React.Dispatch<React.SetStateAction<string | null>>;

  /**
   * Merge the base photo with selected filters/stickers and store it temporarily in state
   */
  mergeImages: () => Promise<void>;

  /**
   * Download the merged image to the user's machine (temporary implementation)
   */
  download: () => void;

  /**
   * Represents the current step of the user in the photo-taking flow
   */
  step: StepType;

  /**
   * Change the current step in the photo-taking process
   * @param newStep - the next step to transition to
   */
  handleStep: (newStep: StepType) => void;

  /**
   * Capture a raw photo without any filters or stickers and save it temporarily
   */
  takeRawPhoto: () => void;

  /**
   * The raw (unfiltered, unedited) photo stored temporarily (Base64 string or null)
   */
  rawPhoto: string | null;
};

export const PhotoContext = createContext<PhotoContextType>({
  webcamRef: null as unknown as RefObject<Webcam | null>,
  canvasRef: null as unknown as RefObject<HTMLCanvasElement | null>,
  step: "preview",
  handleStep: () => {},
  capturedImage: null,
  setCapturedImage: () => {},
  mergeImages: async() => {},
  download: () => {},
  takeRawPhoto: () => {},
  rawPhoto: null,
});
