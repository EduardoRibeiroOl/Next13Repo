import Link from "next/link";

const URL = 'https://dev.to/api/articles?tag=javascript';

async function getNoticesDev() {
    const response = await fetch(URL);

    if (response.status === 200) {
        const data = await response.json();
        return data;
    }

    return []; // retorna lista vazia se der erro
}

export default async function Test() {
    const data = await getNoticesDev();
    //console.log(data)

    return (
        <div className="min-h-screen bg-gray-100 p-4">

            <nav className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto my-4 ">
                <h1 className="text-4xl font-bold text-blue-600">   Notícias de JavaScript do Dev.to :)</h1>
            </nav>

            <nav className="w-full">
                <ul className="text-3xl font-bold text-blue-600">
                    {data.map((item) => (
                        <li key={item.id} className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-5xl mx-auto my-4">
                            <Link href={'/api/hello'}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
