// Ziccer's dot-space choreography: what the dots form as the homepage scrolls.
// Starfield → the courts → the coach's world ranking → a racket for booking → a big spinning
// ball behind the summer camp → the black hole at the closing call to action.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const HOME_STEPS: SpaceStep[] = [
  // the court lines stand on the right; the courts and prices keep their text to the left
  { anchor: "#palyak", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // Ervin's best ITF senior world ranking, beside the coach heading, formed when it is mid-screen
  { anchor: "#edzo-title", done: 0.5, shape: { word: "No.7" }, wide: at(0.77, 0.5, 0.19, 0.3), narrow: phone },
  // between the lessons / booking steps and the call card
  { anchor: "#oktatas", shape: "racket", wide: at(0.515, 0.6, 0.1, 0.28), narrow: phone },
  // large, centred, faint and spinning behind the summer camp and the reviews
  { anchor: "#tabor", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// ball, paper, clay, clubhouse mint
export const PALETTE = ["#e4e68a", "#f3efe6", "#e5784c", "#8fd7bd"];
export const FONT = 'italic 500 230px "Cormorant Garamond Variable", Georgia, serif';
