export default async function getData(userId) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const dataUser = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    const dataPost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const jsonDataUser = await dataUser.json()
    const jsonDataPost = await dataPost.json()
    

    const data = {
        user: jsonDataUser,
        post: jsonDataPost
    }
    return data;
}
