const isHighlighted = (state: boolean) => {
  if (state === true) {
    return {color: "var(--secondary)"}
  }

  return;
};

export { isHighlighted };