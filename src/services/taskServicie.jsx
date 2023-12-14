const url = 'http://localhost:3333'

const getTasks = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  }

  try {
    const response = await fetch(`${url}/tasks`, options)
    if(!response.ok){
      throw new Error(`Errror en la solicitud: ${response.status} ${response.statusText}`)
    }
    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error('Error en la solicitud', error)
  }
}

const getTask = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  }

  try {
    const response = await fetch(`${url}/tasks/${id}`, options)
    if(!response.ok){
      throw new Error(`Errror en la solicitud: ${response.status} ${response.statusText}`)
    }
    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error('Error en la solicitud', error)
  }
}

const createTask = async (task) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: task
  }

  try {
    const response = await fetch(`${url}/tasks`, options)
    if(!response.ok){
      throw new Error(`Errror en la solicitud: ${response.status} ${response.statusText}`)
    }
    return response.ok
  } catch (error) {
    console.error('Error en la solicitud', error)
  }
}

const updateTask = async (task, id) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: task
  }

  try {
    const response = await fetch(`${url}/tasks/${id}`, options)
    if(!response.ok){
      throw new Error(`Errror en la solicitud: ${response.status} ${response.statusText}`)
    }
    return response.ok
  } catch (error) {
    console.error('Error en la solicitud', error)
  }
}

const deleteTask = async (id) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
  }

  try {
    const response = await fetch(`${url}/tasks/${id}`, options)
    if(!response.ok){
      throw new Error(`Errror en la solicitud: ${response.status} ${response.statusText}`)
    }
    // const responseData = await response.json()
    return response.ok
  } catch (error) {
    console.error('Error en la solicitud', error)
  }
}

const taskService = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}


export default taskService