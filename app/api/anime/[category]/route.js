export async function GET(request, { params }) {
    const { category } = params;

    try {
        const response = await fetch(
            `https://api.jikan.moe/v4/top/anime?filter=${category}`,
        );
        if (!response.ok) {
            throw new Error(
                `Failed to fetch from Jikan API: ${response.status}`
            );
        }

        const {data} = await response.json();
        return new Response(
            JSON.stringify({
                message: "Anime fetched successfully!",
                data: data,
            }),
        );
    } catch (err) {
        console.error("Error fetching from Jikan API", err);
    }
}