"use client";
import { useBlobUrl } from "@/hooks/useBlobUrl";
import { MidiEditorHandle, PianoRoll } from "react-piano-roll";
import RenderAction from "./RenderAction";
import { useDebug } from "@/hooks/useDebug";
import { useAudioStatus } from "@/hooks/useAudioStatus";
import { RxPinTop } from "react-icons/rx";
import { RxPinBottom } from "react-icons/rx";
import { RxColumnSpacing } from "react-icons/rx";
import { upOctave } from "@/actions/upOctave";
import { downOctave } from "@/actions/downOctave";
import { setLegato } from "@/actions/setLegato";
import { useEffect, useRef } from "react";

export interface SvsPianoRollProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function SvsPianoRoll(props: SvsPianoRollProps) {
  const [audioSource, setAudioSource] = useBlobUrl();
  const [audioStatus, audioStatusDispatch] = useAudioStatus();
  const audioRef = useRef<HTMLAudioElement>(null);
  const pianorollRef = useRef<MidiEditorHandle>(null);

  useEffect(() => {
    if (audioSource) {
      if (audioRef.current?.paused) {
        audioRef.current?.load();
      } else {
        audioRef.current?.pause();
        audioRef.current?.load();
        audioRef.current?.play();
      }
    }
  }, [audioSource]);

  return (
    <>
      <audio
        ref={audioRef}
        onTimeUpdate={() => {
          if (pianorollRef.current) {
            pianorollRef.current.currentTime = audioRef.current?.currentTime!
          }
        }}
        onEnded={() => pianorollRef.current?.pause()}
      >
        <source src={audioSource?.url} type="audio/wav" />
      </audio>
      <PianoRoll
        lyric
        onNoteUpdate={() => audioStatusDispatch("NOTE_MODIFIED")}
        loading={!audioStatus.getIsUpToDate()}
        onPlay={() => audioRef.current?.play()}
        onPause={() => audioRef.current?.pause()}
        ref={pianorollRef}
      >
        <RenderAction
          setAudioSource={setAudioSource}
          audioStatus={audioStatus}
          setAudioStatus={audioStatusDispatch}
          audioRef={audioRef}
        />

        <PianoRoll.Action name="legato" onClick={setLegato}>
          <RxColumnSpacing />
        </PianoRoll.Action>

        <PianoRoll.Action name="up-octave" onClick={upOctave}>
          <RxPinTop />
        </PianoRoll.Action>

        <PianoRoll.Action name="down-octave" onClick={downOctave}>
          <RxPinBottom />
        </PianoRoll.Action>
      </PianoRoll>
    </>
  );
}
