export function extractDateAndTime(placedAt?: string) {
  if (!placedAt) { return { date: '', time: '' }; }
  const [datePart, rest] = placedAt.split(' at ');
  if (!rest) { return { date: placedAt, time: '' }; }
  const timeMatch = rest.match(/(\d{1,2}:\d{2})[^\d]*(AM|PM)/i);
  const time = timeMatch ? `${timeMatch[1]} ${timeMatch[2]}` : rest;
  return { date: datePart, time };
}
