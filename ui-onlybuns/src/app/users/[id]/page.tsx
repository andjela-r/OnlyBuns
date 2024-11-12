export default async function Profile({ params }: { params: { id: string }}){
    const { id } = await params;
    return(<h1>User profile: {id}</h1>)
}