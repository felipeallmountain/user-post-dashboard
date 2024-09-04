// TODO: GET URLS FROM ENV VARIABLES
const USER_DATA = 'https://jsonplaceholder.typicode.com/users'
const POST_DATA = 'https://jsonplaceholder.typicode.com/posts'

const getUserPostData = async (url = '') => {
  try {
    const response = await fetch(url)
    if (response.ok) {
      return await response.json()
    }
  }  catch(error) {
    console.error(error)
  }
}

export const getCombinedData = async () => {
  const usersData: Promise<User[]> = getUserPostData(USER_DATA)
  const users: User[] = await usersData

  const postData: Promise<Post[]> = getUserPostData(POST_DATA)
  const posts: Post[] = await postData

  if (users.length && posts.length) {
    users.map(user => {
      user.postcounts = posts.filter(value => value.userId === user.id)
    })

    return Promise.resolve(users) 
  }

  return []
}