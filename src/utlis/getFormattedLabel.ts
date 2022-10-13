const MONTH_ARRAY = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export const getFormattedLabel = (label: string) => {
  const labelArray = label.split('-');
  const month = Number(labelArray[1]) - 1;
  return `${MONTH_ARRAY[month]} ${labelArray[0]}`;
};
