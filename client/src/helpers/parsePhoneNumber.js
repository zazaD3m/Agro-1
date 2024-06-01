export const getPhoneNumberForHref = (phoneNumber) => {
  // input - "+995-555-11-22-33"
  // output: "+995%20555%2011%2022%2033" => +995 555 11 22 33
  const formattedPhoneNumber = phoneNumber.replace(/-/g, "%20");
  return `tel:${formattedPhoneNumber}`;
};
export const getHiddenPhoneNumber = (phoneNumber) => {
  // input - "+995-555-11-22-33"
  // output: "555 11 ** **"
  const visibleNumbers = phoneNumber.slice(5, 11).replace(/-/g, " ");
  const newPhoneNumber = `${visibleNumbers} ** **`;
  return newPhoneNumber;
};
export const getShownPhoneNumber = (phoneNumber) => {
  // input - "+995-555-11-22-33"
  // output: "555 11 22 33"
  const visibleNumbers = phoneNumber.slice(5, 17).replace(/-/g, " ");
  return visibleNumbers;
};
