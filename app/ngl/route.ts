import type {NextRequest} from "next/server";

export async function POST(request: NextRequest) {
	const data = await request.json();

    return fetch("https://ngl.link/api/submit", {
        method: "POST",
        body: new URLSearchParams({
			...data,
            deviceId: crypto.randomUUID(),
            username: process.env.NGL_USERNAME!,
            referrer: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
        })
    });
}