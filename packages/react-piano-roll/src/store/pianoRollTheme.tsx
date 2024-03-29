export type PianoRollTheme = ReturnType<typeof defaultPianoRollTheme>;

export function defaultPianoRollTheme() {
  return {
    whiteColor: "#d9d9db",
    blackColor: "#232323",
    key: {
      whiteKeyColor: "#d9d9db",
      blackKeyColor: "#232323",
      whiteKeyPressedColor: "#aeaeaf",
      blackKeyPressedColor: "#444444",
      keySelectedColor: "#3333ee",
      keyLabelColor: "#232323",
      keyBorderRaduis: 3,
      keyBorderWidth: 1,
      keyLabelBaseSize: 14,
    },
    note: {
      noteBorderColor: "#0a61a5",
      noteBackgroundColor: "#3d94d8",
      noteSelectedBackgroundColor: "#ca3369",
      noteSelectedBorderColor: "#ca3369",
      shadowNoteColor: "#777777",
      noteBorderRadius: 6,
    },
    lane: {
      whiteLaneColor: "#2d2d2d",
      blackLaneColor: "#232323",
    },
    selection: {
      selectionAreaBorderColor: "#21215feb",
      selectionAreaFillColor: "#11118b33",
    },
    grid: {
      color: {
        bar: "#373737",
        quarter: "#303030",
        quavers: "#2a2a2a",
      },
    },
    playhead: {
      playheadColor: "#ff0000",
    },
    curve: {
      pitchBendCurveColor: "#ccccdd99",
      pitchBendCurveLineWidth: 2,
      pitchBendCurvePointRaduis: 3,
    },
  };
}
