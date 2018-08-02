export const addClass = (className, abbreviation) => ({
  type: "ADD_CLASS",
  className,
  abbreviation
});
addClass.type = "ADD_CLASS";

export const removeClass = (className) => ({
  type: "REMOVE_CLASS",
  className
});
removeClass.type = "REMOVE_CLASS";

export const setClassLevel = (className, level) => ({
  type: "SET_CLASS_LEVEL",
  className,
  level
});
setClassLevel.type = "SET_CLASS_LEVEL";
