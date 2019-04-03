const callDistanceMatrix = (service, data) =>
  new Promise((resolve, reject) => {
    service.getDistanceMatrix(data, (response, status) => {
      if (status === "OK") {
        resolve(response)
      } else {
        reject(response)
      }
    })
  })

export default callDistanceMatrix
