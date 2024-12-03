export function abbreviateMiddleSurnames(fullName) {
    try {
      const nameParts = fullName.split(' ');
    
      if (nameParts.length < 2) {
        return fullName;
      }
    
      const firstName = nameParts[0];
      const lastName = nameParts[nameParts.length - 1];
      let middleSurnames = nameParts.slice(1, -1);
    
      if (middleSurnames.length > 0) {
        middleSurnames = middleSurnames.map(surname => surname[0]);
        return `${firstName} ${middleSurnames.join('. ')}. ${lastName}`;
      } else {
        return fullName;
      }
    } catch(e) {
      return fullName
    }
}