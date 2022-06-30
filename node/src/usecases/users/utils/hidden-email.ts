const hiddenEmail = (email: string): string => {
  const splitedEmail = email.split('@')

  if (splitedEmail[1] === 'niuco.com.br') {
    return email;
  }
  let emailWithHiddenCharacters = '';
  for (let i = 0; i < email.length; i += 1) {
    if (i > 1 && i < email.indexOf('@') - 2) {
      emailWithHiddenCharacters += '*';
    } else {
      emailWithHiddenCharacters += email[i];
    }
  }
  return emailWithHiddenCharacters
}

export default hiddenEmail
