export const  getAllFunction=async(url)=>{

    return new Promise((resolve,reject)=>{
        fetch(url).then((res)=>{
            return res.json()
        }).then((response)=>{
            resolve(response.results)
        })
    })

}

export const getAllFeatures=async(url)=>{
  return new Promise((resolve,reject)=>{
      fetch(url).then((res)=>{
          return res.json()
      }).then((response)=>{
          resolve(response)
      })
  })
}