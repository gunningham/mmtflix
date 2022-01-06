export const makeRequest = async (requestUrl, method = 'GET', body) => {
  const options = {
    method
  }

  if (body) options.body = JSON.stringify(body)

  try {
    const response = await fetch(requestUrl, options)
    const responseJson = await response.json()

    return responseJson
  } catch (error) {
    console.warn(error)
  }
}
