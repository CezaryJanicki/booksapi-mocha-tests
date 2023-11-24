module.exports = (fullName) => {
  if (typeof fullName !== 'string' || fullName.trim() === '') return 'Error';
  const nameParts = fullName.trim().split(/\s+/);
  if(nameParts.length > 2 || nameParts.length === 0) return 'Error';
  if(nameParts.length === 1) return `${nameParts[0].charAt(0).toUpperCase()}${nameParts[0].slice(1).toLowerCase()}`;
  const [ firstName, lastName ] = nameParts;
  if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) return 'Error';
  if (firstName.length < 1 || lastName.length < 1) return 'Error';
  return `${lastName.charAt(0).toUpperCase()}${lastName.slice(1).toLowerCase()}, ${firstName.charAt(0).toUpperCase()}${firstName.slice(1).toLowerCase()}`;
}