export function validateUrl (url) {
  let validURL = false
  try {
    validURL = new URL(url)
    return validURL
  } catch (error) {
    // todo: log error
    // console.log('error ->', error)
    // console.log('url ->', url)
    // console.log('validURL ->', validURL)
  }
  return validURL
}
