// app/posts/[id]/page.js

const URL = 'https://dev.to/api/articles?tag=javascript'

async function getPostData() {
    const res = await fetch(URL)
    const data = await res.json() 
    /*Aqui estou retornando o json todo, tenho que filtrar*/ 
    return data
}

export default async function PostPage({ params }) {
    const post = await getPostData()
    const filter = post.find(filter => filter.id.toString() === params.id)
    console.log (filter)
  
  return (
    <div>
      <div div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto my-4">
        <h1 className="text-blue-600">{filter.title}</h1>
      </div>
      <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-5xl mx-auto my-4">
        <p className="text-blue-600">{filter.tags}</p>
      </div>
    </div>
  )
}