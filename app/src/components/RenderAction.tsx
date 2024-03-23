"use client";
import { useBlobUrl } from "@/hooks/useBlobUrl";
import { sendAudioProcessingRequest } from "@/utils/sendAudioProcessingRequest";
import { debounce } from "lodash";
import { TrackNoteEvent } from "react-piano-roll/dist/types";
import { saveAs } from "file-saver";
import { PianoRoll } from "react-piano-roll";
import { RxCheck } from "react-icons/rx";
import { RxMagicWand } from "react-icons/rx";
import { useAudioStatus } from "@/hooks/useAudioStatus";

export interface RenderActionProps {
  setAudioSource: ReturnType<typeof useBlobUrl>[1];
  audioStatus: ReturnType<typeof useAudioStatus>[0];
  setAudioStatus: ReturnType<typeof useAudioStatus>[1];
  audioRef: React.RefObject<HTMLAudioElement>;
}
export default function RenderAction(props: RenderActionProps) {
  const debouncedSendAudioProcessingRequest = debounce(sendAudioProcessingRequest, 800);

  const renderAudio = (notes: TrackNoteEvent[]) => {
    console.log("RenderActionItem clicked");
    props.setAudioStatus("RENDERING_REQUESTED");
    sendAudioProcessingRequest(
      120,
      notes
        .filter((note) => note.lyric)
        .map((note) => ({
          ...note,
          time: note.tick,
          duration: note.duration,
          lyric: note.lyric,
          noteNumber: note.noteNumber,
        })),
    ).then((res) => {
      props.setAudioSource(res);
      // if (props.audioRef.current?.paused === false) props.audioRef.current?.pause();
      props.setAudioStatus("RENDERING_DONE");
      // props.audioRef.current?.pause();
      // props.audioRef.current?.load();
      // props.audioRef.current?.play();
      saveAs(res!, "audio.wav");
    });
  };

  return (
    <PianoRoll.Action
      name="render"
      onClick={renderAudio}
      disabled={props.audioStatus.getIsRenderingDisabled()}
      controls
    >
      {props.audioStatus.getIsUpToDate() ? (
        <RxCheck />
      ) : (
        <RxMagicWand style={{ animation: props.audioStatus.rendering ? "wiggle 2s infinite" : "" }} />
      )}
    </PianoRoll.Action>
  );
}
