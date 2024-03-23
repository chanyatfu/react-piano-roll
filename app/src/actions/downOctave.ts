import { TrackNoteEvent } from "react-piano-roll/dist/types";

export function downOctave(notes: TrackNoteEvent[], setNotes: (notes: TrackNoteEvent[]) => void) {
  let selectedNotes = notes.filter((note) => note.isSelected).sort((a, b) => a.tick - b.tick);
  let unselectedNotes = notes.filter((note) => !note.isSelected);
  for (let i = 0; i < selectedNotes.length; i++) {
    selectedNotes[i].noteNumber = selectedNotes[i].noteNumber - 12;
  }
  setNotes([...unselectedNotes, ...selectedNotes]);
}
