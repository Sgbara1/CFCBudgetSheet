export function searchMajors(query: string, items: any[]) {
  const searchTerms = query.toLowerCase().split(' ');
  
  return items.filter(item => {
    const itemText = item.name.toLowerCase();
    return searchTerms.every(term => itemText.includes(term));
  });
}