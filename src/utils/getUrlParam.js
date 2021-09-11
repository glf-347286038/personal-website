export function getUrlParam (queryName) {
  const query = decodeURI(window.location.search.substring(1))
  const vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=')
    if (pair[0] === queryName) {
      return pair[1]
    }
  }
  return null
}
