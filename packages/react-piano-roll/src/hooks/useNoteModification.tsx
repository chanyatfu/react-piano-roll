// import { PianoRollNote } from "@/types";
// import { useNotes } from "@/helpers/notes";
// import { useStore } from "@/hooks/useStore";

// function setSelectedNotesAsLegato(notes: PianoRollNote[], dispatch: React.Dispatch<PianoRollStoreAction>) {
//   let selectedNote = notes.filter((note) => note.isSelected).sort((a, b) => a.tick - b.tick);
//   for (let i = 0; i < selectedNote.length - 1; i++) {
//     selectedNote[i].duration = selectedNote[i + 1].tick - selectedNote[i].tick;
//   }
//   dispatch({ type: "MODIFYING_NOTES", payload: { notes: selectedNote } });
// }
