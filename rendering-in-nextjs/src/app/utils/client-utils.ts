import "client-only";

export const clientSideFunction = () => {
  console.log(`
        use local storage,
        use window object`);

  return "client result";
};
