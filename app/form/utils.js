export function removeCharacter(str, char_pos) {
  const part1 = str.substring(0, char_pos);
  const part2 = str.substring(char_pos + 1, str.length);
  return part1 + part2;
}

export function insertCharacterAtPosition(main_string, pos, ins_string) {
  return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
}
