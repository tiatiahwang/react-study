const CallSingnatures = () => {
  // Last
  type Last = <T>(arr: T[]) => T;
  const last: Last = (arr) => arr[arr.length - 1];
  const lastArr = last([1, 2, 3, 4, 5]);
  console.log(`Last: ${lastArr}`);

  // Prepend
  type Prepend = <T>(arr: T[], item: T) => T[];
  const prepend: Prepend = (arr, item) => [item, ...arr];
  const arr = [1, 2, 3, 4, 5];
  const newArr = prepend(arr, 0);
  console.log(`Prepend: ${newArr}`);

  // Mix
  type Mix = <T>(arr1: T[], arr2: T[]) => T[];
  const mix: Mix = (arr1, arr2) => arr1.concat(arr2);
  // const mix: Mix = (arr1, arr2) => [...arr1, ...arr2];
  const mixed = mix([1, 2, 3], [4, 5, 6]);
  console.log(`Mix: ${mixed}`);

  // Count
  type Count = <T>(arr: T[]) => number;
  const count: Count = (arr) => arr.length;
  const counted = count([1, 2, 3, 4, 5]);
  console.log(`Count: ${counted}`);

  // FindIndex

  type FindIndex = <T>(arr: T[], item: T) => number | null;
  const findIndex: FindIndex = (arr, item) => {
    const index = arr.indexOf(item);
    return index !== -1 ? index : null;
  };
  // type FindIndex = <T>(items: T[], item: T) => number | boolean;
  // const find: FindIndex = (items, item) => {
  //   const index = items.indexOf(item);
  //   return index === -1 ? false : index;
  // };
  const found = findIndex([1, 2, 3, 4, 5], 1);
  console.log(`FindIndex: ${found}`);

  const notFound = findIndex([1, 2, 3, 4, 5], 6);
  console.log(`FindIndex: ${notFound}`);

  // Slice
  type Slice = <T>(
    arr: T[],
    start: number,
    end?: number,
  ) => T[];
  const slice: Slice = (arr, start, end) =>
    arr.slice(start, end ? end : arr.length);
  // arr.slice(start, end)
  const sliced = slice([1, 2, 3, 4, 5], 2);
  console.log(`Slice: ${sliced}`);

  return null;
};

export default CallSingnatures;
